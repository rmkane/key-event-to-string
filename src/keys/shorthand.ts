import type { KeyToText } from '../types'

/**
 * Shorthand defaults for every key.
 */
const shorthandLookup: KeyToText = {
  ArrowLeft: '\u2190', // '←' (LEFTWARDS ARROW)
  ArrowUp: '\u2191', // '↑' (UPWARDS ARROW)
  ArrowRight: '\u2192', // '→' (RIGHTWARDS ARROW)
  ArrowDown: '\u2193', // '↓' (DOWNWARDS ARROW)
  Control: 'Ctrl',
  Escape: 'Esc',
}

/**
 * Alternate shorthand lookup for mobile-friendly support.
 */
const extendedShorthandLookup: KeyToText = {
  Backspace: '\u232B', // '⌫' (ERASE TO THE LEFT)
  CapsLock: '\u21EA', // '⇪' (UPWARDS WHITE ARROW FROM BAR)
  Enter: '\u21B5', // '↵' (DOWNWARDS ARROW WITH CORNER LEFTWARDS)
  Home: '\u2302', // '⌂' (HOUSE)
  Delete: '\u2326', // '⌦' (ERASE TO THE RIGHT)
  '/': '\u00F7', // '÷' (DIVISION SIGN)
  '*': '\u00D7', // '×' (MULTIPLICATION SIGN)
  Shift: '\u21E7', // '⇧' (UPWARDS WHITE ARROW)
  Tab: '\u21B9', // '↹' (LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR)
}

export { extendedShorthandLookup, shorthandLookup }
