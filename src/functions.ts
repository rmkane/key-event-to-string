import type { EventKey, KeyEventDetails, Modifiers, Options } from './types'

import { defaultOptions, keyMap, modifierKeys } from './constants'

/**
 * Builds a map of the key and the modifiers from a keyboard event.
 * @param event - The keyboard event.
 * @returns An object that represents the key and the modifiers.
 */
function buildKeyMap(event: KeyboardEvent): EventKey {
  const { altKey, ctrlKey, keyCode, metaKey, shiftKey } = event
  const isOnlyModifier: boolean = modifierKeys.has(keyCode)
  const character = isOnlyModifier
    ? null
    : keyMap[keyCode] ?? String.fromCharCode(keyCode)

  return {
    character,
    modifiers: {
      cmd: metaKey,
      ctrl: ctrlKey,
      alt: altKey,
      shift: shiftKey,
    },
  }
}

/**
 * Constructs an array of strings that represent the key and the modifiers from a keyboard event.
 * The order of the array is: cmd, ctrl, alt, shift, character.
 * @param event - The keyboard event.
 * @param options - The options to use when converting the event to a string.
 * @returns An array of strings that represent the key and the modifiers.
 */
function buildKeyArray(event: KeyboardEvent, options: Options): string[] {
  const map: EventKey = buildKeyMap(event)
  const modifiers: Modifiers = map.modifiers
  const result = []

  if (modifiers.cmd) result.push(options.cmd)
  if (modifiers.ctrl) result.push(options.ctrl)
  if (modifiers.alt) result.push(options.alt)
  if (modifiers.shift) result.push(options.shift)
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
  const mods: Modifiers = map.modifiers
  const hasModifier = mods.cmd || mods.ctrl || mods.alt || mods.shift

  return {
    hasKey: map.character != null,
    hasModifier,
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

export { details, event2string }
