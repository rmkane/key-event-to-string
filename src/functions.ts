import type { EventKey, KeyEventDetails, Modifiers, Options } from './types.js'

import { defaultOptions } from './constants.js'
import { isModifierKey } from './keys/modifiers.js'

/**
 * Builds a map of the key and the modifiers from a keyboard event.
 * @param {KeyboardEvent} event - The keyboard event.
 * @returns An object that represents the key and the modifiers.
 */
function buildKeyMap(event: KeyboardEvent): EventKey {
  const { altKey, ctrlKey, key, metaKey, shiftKey } = event
  return {
    character: isModifierKey(key) ? null : key,
    modifiers: {
      alt: altKey,
      meta: metaKey,
      ctrl: ctrlKey,
      shift: shiftKey,
    },
  }
}

function hasModifier(mods: Modifiers): boolean {
  return mods.meta || mods.ctrl || mods.alt || mods.shift
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
  if (mods.ctrl) result.push(options.control!)
  if (mods.meta) result.push(options.meta!)
  if (mods.shift) result.push(options.shift!)
  if (map.character != null) result.push(map.character)

  return result
}

/**
 * Returns an object containing details about a keyboard event.
 * The returned object includes the key pressed and whether any modifier keys (Cmd, Ctrl, Alt, Shift) were pressed.
 * @param event - The keyboard event to analyze.
 * @returns An object containing the key pressed and a boolean for each modifier key indicating whether it was pressed.
 */
function details(event: KeyboardEvent): KeyEventDetails {
  const map: EventKey = buildKeyMap(event)
  return {
    hasKey: map.character != null,
    hasModifier: hasModifier(map.modifiers),
    map,
  }
}

/**
 * Returns a function that converts a keyboard event to a string representation.
 * The returned function, when called with a keyboard event, will return a string that includes the keys pressed and any modifier keys (Cmd, Ctrl, Alt, Shift) that were pressed.
 * @param options - The options to use when converting the event to a string.
 * @returns A function that takes a keyboard event and returns a string representation of it.
 */
function event2string(
  options: Options = defaultOptions,
): (event: KeyboardEvent) => string {
  const opts: Options = { ...defaultOptions, ...options }
  return function (event: KeyboardEvent): string {
    return buildKeyArray(event, opts).join(opts.joinWith)
  }
}

export { buildKeyArray, buildKeyMap, details, event2string }
