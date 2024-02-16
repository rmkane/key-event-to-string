/** A type that represents a value that may be null or undefined. */
type Maybe<T> = T | null | undefined

/** The details about a key in a keyboard event. */
type KeyInfo = {
  which: number
  key: string
  code?: string
}

/** A map of key codes to their corresponding text or symbol. */
type KeyToText = Record<string, string>

/** System key aliases. */
type SystemKeyAliases = {
  Escape?: string
}

/** Modifier key aliases. */
type ModifierKeyAliases = {
  Meta?: string
  Control?: string
  Alt?: string
  Shift?: string
}

/** Arrow key aliases. */
type ArrowKeyAliases = {
  ArrowLeft?: string
  ArrowUp?: string
  ArrowRight?: string
  ArrowDown?: string
}

/** Mobile key aliases. */
type MobileKeyAliases = {
  Backspace?: string
  CapsLock?: string
  Enter?: string
  Home?: string
  Delete?: string
  '/'?: string
  '*'?: string
  Shift?: string
  Tab?: string
}

/** Keyboard event key aliases. */
type KeyAliases = SystemKeyAliases &
  ModifierKeyAliases &
  ArrowKeyAliases &
  MobileKeyAliases

/** Keyboard event code aliases. */
type CodeAliases = {
  Backquote?: string
  Digit0?: string
  Digit1?: string
  Digit2?: string
  Digit3?: string
  Digit4?: string
  Digit5?: string
  Digit6?: string
  Digit7?: string
  Digit8?: string
  Digit9?: string
  Minus?: string
  Equal?: string
  BracketLeft?: string
  BracketRight?: string
  Backslash?: string
  Semicolon?: string
  Quote?: string
  Comma?: string
  Period?: string
  Slash?: string
  Space?: string
}

/** The platform on which the keyboard event occurred. */
type Platform = {
  isMac?: boolean
  isMobile?: boolean
}

/** The options to use when building a key array. */
type Options = {
  keyAliases?: KeyAliases
  codeAliases?: CodeAliases
  platform?: Platform
  joinWith?: string
}

/** A set of key codes that represent modifier keys for a KeyboardEvent. */
type KeyEventModifiers = {
  altKey: boolean
  ctrlKey: boolean
  metaKey: boolean
  shiftKey: boolean
}

/** The details about a single key in a keyboard event. */
type EventKey = {
  character: Maybe<string>
  modifiers: KeyEventModifiers
}

/**
 * The details about a keyboard event, including whether it has a key, whether
 * it has a modifier, and a map of the event keys.
 */
type KeyEventDetails = {
  hasKey: boolean
  hasModifier: boolean
  map: EventKey
}

export type {
  ArrowKeyAliases,
  CodeAliases,
  EventKey,
  KeyAliases,
  KeyEventDetails,
  KeyEventModifiers,
  KeyInfo,
  KeyToText,
  Maybe,
  MobileKeyAliases,
  ModifierKeyAliases,
  Options,
  Platform,
  SystemKeyAliases,
}
