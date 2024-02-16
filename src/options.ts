import type { Options } from './types.js'

import { defaultCodeAliases } from './keys/aliases/codeAliases.js'
import {
  defaultKeyAliases,
  mobileKeyAliases,
} from './keys/aliases/keyAliases.js'
import {
  defaultMacModifierKeyAliases,
  defaultModifierKeyAliases,
} from './keys/aliases/modifierAliases.js'
import { deepMerge } from './utils/object.js'

/**
 * The default options to use when converting a keyboard event to a string.
 *
 * These options define an alias for each key and the delimiter used to join
 * them.
 */
const defaultOptions: Options = {
  codeAliases: { ...defaultCodeAliases },
  keyAliases: { ...defaultKeyAliases, ...defaultModifierKeyAliases },
  platform: {
    isMac: false,
    isMobile: false,
  },
  joinWith: ' + ',
}

/**
 * Merges the user options with the default options.
 *
 * @param options - The user options to merge.
 * @returns The merged options.
 */
function mergeOptions(options: Options): Options {
  const opts: Options = {}

  // Merge the user options with the default options.
  deepMerge(opts, defaultOptions, options)

  // Merge thedefault macOS key aliases with the user key aliases.
  if (opts.platform!.isMac) {
    deepMerge(opts.keyAliases!, defaultMacModifierKeyAliases)
  }

  // Merge the default mobile key aliases with the user key aliases.
  if (opts.platform!.isMobile) {
    deepMerge(opts.keyAliases!, mobileKeyAliases)
  }

  return opts
}

export { defaultOptions, mergeOptions }
