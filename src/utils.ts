import type { EventKey, KeyEventModifiers, Options } from './types.js'

import { isModifierKey } from './keys/modifiers.js'
import { shorthandLookup } from './keys/shorthand.js'
import { physicalKeyLookup } from './keys/physical.js'

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
  return shorthandLookup[code] ?? physicalKeyLookup[code] ?? mapAlpha(key)
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
    return [options.meta!]
  }

  const result = []

  // The order is: Meta, Control, Alt, Shift, Character
  if (mods.metaKey) result.push(options.meta!)
  if (mods.ctrlKey) result.push(options.control!)
  if (mods.altKey) result.push(options.alt!)
  if (mods.shiftKey) result.push(options.shift!)
  if (map.character != null) result.push(map.character)

  return result
}

export { buildKeyArray, buildKeyMap, hasModifier, mapAlpha }
