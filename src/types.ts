/**
 * The options for the keyboard shortcut.
 */
type Options = {
  cmd: string
  ctrl: string
  alt: string
  shift: string
  joinWith: string
}

/**
 * A map of key codes to their string representations.
 */
type KeyLookup = Record<number, string>

/**
 * A set of key codes that represent modifier keys.
 */
type Modifiers = {
  cmd: boolean
  ctrl: boolean
  alt: boolean
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

export type { EventKey, KeyEventDetails, KeyLookup, Modifiers, Options }
