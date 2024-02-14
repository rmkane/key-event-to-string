import type { Options } from './types.js'

/**
 * The default options to use when converting a keyboard event to a string.
 * These options define the string representation for each modifier key and the delimiter used to join them.
 */
const defaultOptions: Options = {
  meta: 'Cmd',
  control: 'Ctrl',
  alt: 'Alt',
  shift: 'Shift',
  joinWith: ' + ',
}

export { defaultOptions }
