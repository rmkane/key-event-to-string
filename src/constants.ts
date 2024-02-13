import { type KeyLookup, type Options } from './types.js'

// Key codes for various keys on the keyboard
const KEY_SHIFT_LEFT = 16
const KEY_CONTROL_LEFT = 17
const KEY_ALT_LEFT = 18
const KEY_META_LEFT = 91
const KEY_META_RIGHT = 93
const KEY_OS_LEFT = 224

/**
 * The default options to use when converting a keyboard event to a string.
 * These options define the string representation for each modifier key and the delimiter used to join them.
 */
const defaultOptions: Options = {
  alt: 'Alt',
  cmd: 'Cmd',
  ctrl: 'Ctrl',
  shift: 'Shift',
  joinWith: ' + ',
}

/**
 * A set of key codes that represent modifier keys.
 * This set is used to quickly check if a key code corresponds to a modifier key.
 */
const modifierKeys = new Set<number>([
  KEY_ALT_LEFT,
  KEY_CONTROL_LEFT,
  KEY_META_LEFT,
  KEY_META_RIGHT,
  KEY_OS_LEFT,
  KEY_SHIFT_LEFT,
])

/**
 * A map of key codes to their string representations.
 */
const keyMap: KeyLookup = {
  8: 'Backspace',
  9: 'Tab',
  13: 'Enter',
  27: 'Escape',
  32: 'Space',
  36: 'Home',
  33: 'Page Up',
  34: 'Page Down',
  35: 'End',
  37: 'Left',
  38: 'Up',
  39: 'Right',
  40: 'Down',
  46: 'Delete',
  112: 'F1',
  113: 'F2',
  114: 'F3',
  115: 'F4',
  116: 'F5',
  117: 'F6',
  118: 'F7',
  119: 'F8',
  120: 'F9',
  121: 'F10',
  122: 'F11',
  123: 'F12',
  186: ';',
  187: '=',
  188: ',',
  189: '-',
  190: '.',
  192: '`',
  222: "'",
}

export { defaultOptions, keyMap, modifierKeys }
