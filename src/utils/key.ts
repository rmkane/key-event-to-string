import type {
  CodeAliases,
  EventKey,
  KeyAliases,
  KeyEventModifiers,
  Options,
} from '../types.js'

import { defaultModifiers, isModifierKey } from '../keys/modifiers.js'
import { defaultOptions } from '../constants.js'
import { pluck } from './object.js'

/**
 * Maps an alpha key to its uppercase version.
 *
 * @param key - The key to map.
 * @returns The uppercase version of the key if it is an alpha key; otherwise,
 *   the original key.
 */
function mapAlpha(key: string): string {
  return /^[a-zA-Z]$/.test(key) ? key.toUpperCase() : key
}

/**
 * Map a character to a shorthand or physical key.
 *
 * @param code - A KeyBoardEvent.code value
 * @param key - A KeyBoardEvent.key value
 */
function mapCharacter(code: string, key: string): string {
  return (
    pluck(defaultOptions.codeAliases!, code as keyof CodeAliases) ??
    pluck(defaultOptions.keyAliases!, key as keyof KeyAliases) ??
    mapAlpha(key)
  )
}

/**
 * Builds a key map from a keyboard event.
 *
 * @param event - The keyboard event.
 * @returns - An object containing the character and modifiers of the keyboard
 *   event.
 */
function buildKeyMap(event: KeyboardEvent): EventKey {
  const { code, key, altKey, ctrlKey, metaKey, shiftKey } = event
  return {
    character: isModifierKey(key) ? null : mapCharacter(code, key),
    modifiers: { altKey, ctrlKey, metaKey, shiftKey },
  }
}

/**
 * Determines whether any modifier keys are pressed.
 *
 * @param mods - The modifiers to check.
 * @returns True if any modifier keys are pressed; otherwise, false.
 */
function hasModifier(mods: KeyEventModifiers): boolean {
  return mods.metaKey || mods.ctrlKey || mods.altKey || mods.shiftKey
}

/**
 * Builds an array of key labels from a keyboard event.
 *
 * @param event - The keyboard event.
 * @param options - The options to use when building the key array.
 * @returns An array of key labels.
 */
function buildKeyArray(event: KeyboardEvent, options: Options): string[] {
  const map: EventKey = buildKeyMap(event)
  const mods: KeyEventModifiers = map.modifiers

  // Edge-case: Only the meta key is pressed
  if (event.key === 'Meta' && !hasModifier(mods)) {
    return [options.keyAliases?.Meta ?? defaultModifiers.Meta!]
  }

  const result = []

  // The order is: Meta, Control, Alt, Shift, Character
  if (mods.metaKey) {
    result.push(options.keyAliases?.Meta ?? defaultModifiers.Meta!)
  }
  if (mods.ctrlKey) {
    result.push(options.keyAliases?.Control ?? defaultModifiers.Control!)
  }
  if (mods.altKey) {
    result.push(options.keyAliases?.Alt ?? defaultModifiers.Alt!)
  }
  if (mods.shiftKey) {
    result.push(options.keyAliases?.Shift ?? defaultModifiers.Shift!)
  }
  if (map.character != null) {
    result.push(map.character)
  }

  return result
}

export { buildKeyArray, buildKeyMap, hasModifier, mapAlpha }
