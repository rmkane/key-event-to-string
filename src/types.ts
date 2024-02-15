/*
 * This file contains the types used in the keyboard-shortcut module.
 */

/** A type that represents a value that may be null or undefined. */
type Maybe<T> = T | null | undefined

/** Key modifier options for system defaults. */
type KeyModifierOptions = {
  Alt: string
  Control: string
  Meta: string
  Shift: string
}

/** The details about a key in a keyboard event. */
type KeyInfo = {
  which: number
  key: string
  code?: string
}

/** A map of key codes to their corresponding text or symbol. */
type KeyToText = Record<string, string>

/** The options for the keyboard shortcut. */
type Options = {
  meta?: string
  control?: string
  alt?: string
  shift?: string
  joinWith?: string
}

/** A set of key codes that represent modifier keys. */
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
  EventKey,
  KeyEventDetails,
  KeyEventModifiers,
  KeyInfo,
  KeyModifierOptions,
  KeyToText,
  Maybe,
  Options,
}
