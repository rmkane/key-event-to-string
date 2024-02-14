import type { Options } from './types.js'

import { defaultModifiers } from './keys/modifiers.js'

/**
 * The default options to use when converting a keyboard event to a string.
 * These options define the string representation for each modifier key and the
 * delimiter used to join them.
 */
const defaultOptions: Options = {
  meta: defaultModifiers.Meta,
  control: defaultModifiers.Control,
  alt: defaultModifiers.Alt,
  shift: defaultModifiers.Shift,
  joinWith: ' + ',
}

export { defaultOptions }
