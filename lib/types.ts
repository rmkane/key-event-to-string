type Options = {
  cmd: string;
  ctrl: string;
  alt: string;
  shift: string;
  joinWith: string;
};

type KeyLookup = {
  [key: number]: string;
};

type Modifiers = {
  cmd: boolean;
  ctrl: boolean;
  alt: boolean;
  shift: boolean;
};

type EventKey = {
  character: string | null;
  modifiers: Modifiers;
};

type KeyEventDetails = {
  hasKey: boolean;
  hasModifier: boolean;
  map: EventKey;
};

export type { EventKey, KeyEventDetails, KeyLookup, Modifiers, Options };
