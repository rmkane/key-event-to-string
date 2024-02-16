import type {
  ArrowKeyAliases,
  CodeAliases,
  EventKey,
  KeyAliases,
  KeyEventDetails,
  KeyEventModifiers,
  Maybe,
  MobileKeyAliases,
  ModifierKeyAliases,
  Options,
  Platform,
  SystemKeyAliases,
} from './types.js'

import { event2string, details } from './functions.js'

export type {
  ArrowKeyAliases,
  CodeAliases,
  EventKey,
  KeyAliases,
  KeyEventDetails,
  KeyEventModifiers,
  Maybe,
  MobileKeyAliases,
  ModifierKeyAliases,
  Options,
  Platform,
  SystemKeyAliases,
}

export { details, event2string }
