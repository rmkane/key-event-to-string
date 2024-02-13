interface Options {
  cmd: string
  ctrl: string
  alt: string
  shift: string
  joinWith: string
}

type KeyLookup = Record<number, string>

interface Modifiers {
  cmd: boolean
  ctrl: boolean
  alt: boolean
  shift: boolean
}

interface EventKey {
  character: string | null
  modifiers: Modifiers
}

interface KeyEventDetails {
  hasKey: boolean
  hasModifier: boolean
  map: EventKey
}

export type { EventKey, KeyEventDetails, KeyLookup, Modifiers, Options }
