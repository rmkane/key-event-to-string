import type { Options } from '../types.js'

import { defaultOptions, mergeOptions } from '../options.js'
import KeyboardEventDetails from './KeyboardEventDetails.js'

/** Processes a keyboard event and returns the details about the event. */
class KeyboardEventProcessor {
  options: Options

  /**
   * Creates a new KeyboardEventProcessor.
   *
   * @param options - The options to use when processing a keyboard event.
   * @returns A new KeyboardEventProcessor.
   */
  constructor(options: Options = defaultOptions) {
    this.options = mergeOptions(options)
  }

  /**
   * Processes a keyboard event and returns the details about the event.
   *
   * @param event - The keyboard event to process.
   * @returns The details about the keyboard event.
   */
  processKeyboardEvent(event: KeyboardEvent): KeyboardEventDetails {
    return new KeyboardEventDetails(event, this.options)
  }
}

export default KeyboardEventProcessor
