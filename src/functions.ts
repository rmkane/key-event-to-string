import type { EventKey, KeyEventDetails, Options } from './types.js'

import { defaultOptions } from './constants.js'
import { buildKeyArray, buildKeyMap, hasModifier } from './utils.js'

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

export { details, event2string }
