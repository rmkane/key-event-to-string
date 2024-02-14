import type { KeyModifierOptions } from '../types'

const modifierKeys = new Set(['Alt', 'Control', 'Meta', 'Shift'])

// @unused
const defaultModifiers: KeyModifierOptions = {
  Meta: 'Cmd',
  Control: 'Ctrl',
  Alt: 'Alt',
  Shift: 'Shift',
} as const

// @unused
const defaultWindowsModifiers: KeyModifierOptions = {
  Meta: '\u229E', // (Windows key): '⊞' (SQUARE LOZENGE)
  Control: 'Ctrl',
  Alt: 'Alt',
  Shift: 'Shift',
} as const

// @unused
const defaultMacModifiers: KeyModifierOptions = {
  Meta: '\u2318', // (Command Key): '⌘' (PLACE OF INTEREST SIGN)
  Control: '\u2303', // '⌃' (UP ARROWHEAD)
  Alt: '\u2325', // (Option key): '⌥' (OPTION KEY)
  Shift: '\u21E7', // '⇧' (UPWARDS WHITE ARROW)
} as const

function isModifierKey(key: string): boolean {
  return modifierKeys.has(key)
}

export {
  defaultMacModifiers,
  defaultModifiers,
  defaultWindowsModifiers,
  isModifierKey,
}
