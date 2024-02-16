import type { EventKey, KeyEventDetails, Options } from './types.js'

import { defaultOptions } from './constants.js'
import { buildKeyArray, buildKeyMap, hasModifier } from './utils/key.js'
import { deepMerge } from './utils/object.js'
import { defaultMacModifiers } from './keys/modifiers.js'
import { mobileShorthandLookup } from './keys/shorthand.js'

/**
 * Builds the details about a keyboard event, including whether it has a key,
 * whether it has a modifier, and a map of the event keys.
 *
 * @param event - The keyboard event.
 * @returns The details about the keyboard event.
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
 * Builds a string representation of a keyboard event.
 *
 * @param options - The options to use when building the string.
 * @returns A function that takes a keyboard event and returns a string
 *   representation of the event.
 */
function event2string(
  options: Options = defaultOptions,
): (event: KeyboardEvent) => string {
  const opts: Options = mergeOptions(options)
  return function (event: KeyboardEvent): string {
    return buildKeyArray(event, opts).join(opts.joinWith)
  }
}

/**
 * Merges the user options with the default options.
 *
 * @param options - The user options to merge.
 * @returns The merged options.
 */
function mergeOptions(options: Options): Options {
  const opts: Options = {}
  deepMerge(opts, defaultOptions, options)
  if (opts.platform!.isMac) {
    deepMerge(opts.keyAliases!, defaultMacModifiers)
  }
  if (opts.platform!.isMobile) {
    deepMerge(opts.keyAliases!, mobileShorthandLookup)
  }
  return opts
}

export { details, event2string }
