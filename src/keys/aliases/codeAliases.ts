import type { CodeAliases } from '../../types'

/** Maps an event.key to a symbol for physical keyboards. */
const defaultCodeAliases: CodeAliases = {
  Backquote: '`',
  Digit0: '0',
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Minus: '-',
  Equal: '=',
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '\\',
  Semicolon: ';',
  Quote: '"',
  Comma: ',',
  Period: '.',
  Slash: '/',
  Space: 'Space',
}

export { defaultCodeAliases }
