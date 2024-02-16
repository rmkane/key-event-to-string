import type { Options } from './types.js'

import { defaultModifiers } from './keys/modifiers.js'
import { physicalKeyLookup } from './keys/physical.js'
import { shorthandLookup } from './keys/shorthand.js'

/**
 * The default options to use when converting a keyboard event to a string.
 *
 * These options define the string representation for each modifier key and the
 * delimiter used to join them.
 */
const defaultOptions: Options = {
  codeAliases: { ...physicalKeyLookup },
  keyAliases: { ...shorthandLookup, ...defaultModifiers },
  platform: {
    isMac: false,
    isMobile: false,
  },
  joinWith: ' + ',
}

export { defaultOptions }
