import type { ModifierKeyAliases } from '../../types'

/**
 * The default key modifiers to use when converting a keyboard event to a
 * string.
 */
const defaultModifierKeyAliases: ModifierKeyAliases = {
  Meta: 'Cmd',
  Control: 'Ctrl',
  Alt: 'Alt',
  Shift: 'Shift',
} as const

/**
 * The default key modifiers to use when converting a keyboard event to a string
 * on Windows.
 */
const defaultWindowsModifierKeyAliases: ModifierKeyAliases = {
  Meta: '\u229E', // (Windows key): '⊞' (SQUARE LOZENGE)
  Control: 'Ctrl',
  Alt: 'Alt',
  Shift: 'Shift',
} as const

/**
 * The default key modifiers to use when converting a keyboard event to a string
 * on macOS.
 */
const defaultMacModifierKeyAliases: ModifierKeyAliases = {
  Meta: '\u2318', // (Command Key): '⌘' (PLACE OF INTEREST SIGN)
  Control: '\u2303', // '⌃' (UP ARROWHEAD)
  Alt: '\u2325', // (Option key): '⌥' (OPTION KEY)
  Shift: '\u21E7', // '⇧' (UPWARDS WHITE ARROW)
} as const

export {
  defaultMacModifierKeyAliases,
  defaultModifierKeyAliases,
  defaultWindowsModifierKeyAliases,
}
