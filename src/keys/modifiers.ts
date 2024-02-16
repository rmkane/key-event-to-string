import type { ModifierKeyAliases } from '../types'

/** A set of key codes that represent modifier keys. */
const modifierKeys = new Set(['Alt', 'Control', 'Meta', 'Shift'])

/**
 * The default key modifiers to use when converting a keyboard event to a
 * string.
 */
const defaultModifiers: ModifierKeyAliases = {
  Meta: 'Cmd',
  Control: 'Ctrl',
  Alt: 'Alt',
  Shift: 'Shift',
} as const

/**
 * The default key modifiers to use when converting a keyboard event to a string
 * on Windows.
 */
const defaultWindowsModifiers: ModifierKeyAliases = {
  Meta: '\u229E', // (Windows key): '⊞' (SQUARE LOZENGE)
  Control: 'Ctrl',
  Alt: 'Alt',
  Shift: 'Shift',
} as const

/**
 * The default key modifiers to use when converting a keyboard event to a string
 * on macOS.
 */
const defaultMacModifiers: ModifierKeyAliases = {
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
