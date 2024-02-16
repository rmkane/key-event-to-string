import type { KeyAliases, MobileKeyAliases, SystemKeyAliases } from '../types'

/** Maps an event.key to a symbol for desktop-friendly support. */
const shorthandLookup: KeyAliases & SystemKeyAliases = {
  ArrowLeft: '\u2190', // '←' (LEFTWARDS ARROW)
  ArrowUp: '\u2191', // '↑' (UPWARDS ARROW)
  ArrowRight: '\u2192', // '→' (RIGHTWARDS ARROW)
  ArrowDown: '\u2193', // '↓' (DOWNWARDS ARROW)
  Escape: 'Esc',
}

/** Maps an event.key to a symbol for mobile-friendly support. */
const mobileShorthandLookup: MobileKeyAliases = {
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

export { mobileShorthandLookup, shorthandLookup }
