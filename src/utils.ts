import type { EventKey, Modifiers, Options } from './types.js'

import { isModifierKey } from './keys/modifiers.js'
import { shorthandLookup } from './keys/shorthand.js'
import { physicalKeyLookup } from './keys/physical.js'

/**
 * Test if a given key is a letter and convert it to upper-case.
 *
 * @param key A KeyboardEvent.key value.
 * @returns An upper-case key if it's a letter; otherwise, the original key.
 */
function mapAlpha(key: string): string {
  return /^[a-zA-Z]$/.test(key) ? key.toUpperCase() : key
}

/**
 * Map a character to a shorthand or physical key.
 *
 * @param code a KeyBoardEvent.code value
 * @param key a KeyBoardEvent.key value
 */
function mapCharacter(code: string, key: string): string {
  return shorthandLookup[code] ?? physicalKeyLookup[code] ?? mapAlpha(key)
}

/**
 * Builds a map of the key and the modifiers from a keyboard event.
 * @param {KeyboardEvent} event - The keyboard event.
 * @returns An object that represents the key and the modifiers.
 */
function buildKeyMap(event: KeyboardEvent): EventKey {
  const { code, key, altKey, ctrlKey, metaKey, shiftKey } = event
  return {
    character: isModifierKey(key) ? null : mapCharacter(code, key),
    modifiers: {
      alt: altKey,
      meta: metaKey,
      control: ctrlKey,
      shift: shiftKey,
    },
  }
}

/**
 * Checks if any modifier keys are active.
 *
 * @param mods An object representing the state of modifier keys.
 * @returns True if any of the modifier keys (meta, control, alt, shift) are active; otherwise, false.
 */
function hasModifier(mods: Modifiers): boolean {
  return mods.meta || mods.control || mods.alt || mods.shift
}

/**
 * Constructs an array of strings that represent the key and the modifiers from a keyboard event.
 * The order of the array is: meta, ctrl, alt, shift, character.
 * @param event - The keyboard event.
 * @param options - The options to use when converting the event to a string.
 * @returns An array of strings that represent the key and the modifiers.
 */
function buildKeyArray(event: KeyboardEvent, options: Options): string[] {
  const map: EventKey = buildKeyMap(event)
  const mods: Modifiers = map.modifiers

  // Edge-case: Only the meta key is pressed
  if (event.key === 'Meta' && !hasModifier(mods)) {
    return [options.meta!]
  }

  const result = []

  if (mods.alt) result.push(options.alt!)
  if (mods.control) result.push(options.control!)
  if (mods.meta) result.push(options.meta!)
  if (mods.shift) result.push(options.shift!)
  if (map.character != null) result.push(map.character)

  return result
}

export { buildKeyArray, buildKeyMap, hasModifier }
