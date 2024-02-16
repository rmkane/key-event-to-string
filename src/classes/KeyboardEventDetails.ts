import type { EventKey, KeyEventDetails, Options } from '../types.js'

import {
  buildKeyArray,
  buildKeyMap,
  hasModifier,
  isModifierKey,
} from '../utils/key.js'
import { defaultOptions } from '../options.js'

/**
 * The details about a keyboard event, including whether it has a key, whether
 * it has a modifier, and a map of the event keys.
 */
class KeyboardEventDetails {
  event: KeyboardEvent
  options: Options

  /**
   * Creates a new KeyboardEventDetails.
   *
   * @param event - The keyboard event to process.
   * @param options - The options to use when processing the keyboard event.
   * @returns A new KeyboardEventDetails.
   */
  constructor(event: KeyboardEvent, options: Options = defaultOptions) {
    this.event = event
    this.options = options
  }

  /**
   * Returns the details about the keyboard event, including whether it has a
   * key, whether it has a modifier, and a map of the event keys.
   *
   * @returns The details about the keyboard event.
   */
  getKeyEventDetails(): KeyEventDetails {
    const map: EventKey = buildKeyMap(this.event)
    return {
      hasKey: !isModifierKey(map.data.key!),
      hasModifier: hasModifier(map.modifiers),
      map,
    }
  }

  /**
   * Returns the key labels as an array.
   *
   * @returns The key labels as an array.
   */
  getKeysAsArray(): string[] {
    return buildKeyArray(this.event, this.options)
  }

  /**
   * Returns the key labels as a string.
   *
   * @returns The key labels as a string.
   */
  getKeysAsString(): string {
    return this.getKeysAsArray().join(this.options.joinWith ?? ' ')
  }

  /**
   * Returns the key labels as a string.
   *
   * @returns The key labels as a string.
   * @see getKeysAsString
   */
  toString(): string {
    return this.getKeysAsString()
  }
}

export default KeyboardEventDetails
