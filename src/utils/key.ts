import type {
  CodeAliases,
  EventKey,
  KeyAliases,
  KeyEventModifiers,
  Options,
} from '../types.js'

import { defaultModifierKeyAliases } from '../keys/aliases/modifierAliases.js'
import { pluck } from './object.js'

/** A set of key codes that represent modifier keys. */
const modifierKeys = new Set(['Alt', 'Control', 'Meta', 'Shift'])

/**
 * Determines whether a key is a modifier key.
 *
 * @param key - The key to check.
 * @returns True if the key is a modifier key; otherwise, false.
 */
function isModifierKey(key: string): boolean {
  return modifierKeys.has(key)
}

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
function mapCharacter(code: string, key: string, options: Options): string {
  return (
    pluck(options.codeAliases!, code as keyof CodeAliases) ??
    pluck(options.keyAliases!, key as keyof KeyAliases) ??
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
  const { key, code, altKey, ctrlKey, metaKey, shiftKey } = event
  return {
    data: { key, code },
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
    return [options.keyAliases?.Meta ?? defaultModifierKeyAliases.Meta!]
  }

  const result = []

  // The order is: Meta, Control, Alt, Shift, Character
  if (mods.metaKey) {
    result.push(options.keyAliases?.Meta ?? defaultModifierKeyAliases.Meta!)
  }
  if (mods.ctrlKey) {
    result.push(
      options.keyAliases?.Control ?? defaultModifierKeyAliases.Control!,
    )
  }
  if (mods.altKey) {
    result.push(options.keyAliases?.Alt ?? defaultModifierKeyAliases.Alt!)
  }
  if (mods.shiftKey) {
    result.push(options.keyAliases?.Shift ?? defaultModifierKeyAliases.Shift!)
  }
  if (!isModifierKey(map.data.key!)) {
    const { code, key } = map.data
    result.push(mapCharacter(code!, key!, options))
  }

  return result
}

export { buildKeyArray, buildKeyMap, hasModifier, isModifierKey, mapAlpha }
