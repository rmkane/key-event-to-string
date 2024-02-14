/**
 * Key modifier options for system defaults.
 */
type KeyModifierOptions = {
  Alt: string
  Control: string
  Meta: string
  Shift: string
}

/**
 * Keyboard key information.
 */
type KeyInfo = {
  which: number
  key: string
  code?: string
}

/**
 * Maps a KeyboardEvent key to human-readable text or symbol.
 */
type KeyToText = Record<string, string>

/**
 * The options for the keyboard shortcut.
 */
type Options = {
  meta?: string
  control?: string
  alt?: string
  shift?: string
  joinWith?: string
}

/**
 * A set of key codes that represent modifier keys.
 */
type Modifiers = {
  alt: boolean
  control: boolean
  meta: boolean
  shift: boolean
}

/**
 * The details about a single key in a keyboard event.
 */
type EventKey = {
  character: string | null
  modifiers: Modifiers
}

/**
 * The details about a keyboard event, including whether it has a key,
 * whether it has a modifier, and a map of the event keys.
 */
type KeyEventDetails = {
  hasKey: boolean
  hasModifier: boolean
  map: EventKey
}

export type {
  EventKey,
  KeyEventDetails,
  KeyInfo,
  KeyModifierOptions,
  KeyToText,
  Modifiers,
  Options,
}
