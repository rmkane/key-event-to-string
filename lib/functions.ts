import type { EventKey, KeyEventDetails, Modifiers, Options } from './types'

import { defaultOptions, keyMap, modifierKeys } from './constants'

function buildKeyMap (event: KeyboardEvent): EventKey {
  const { altKey, ctrlKey, keyCode, metaKey, shiftKey } = event
  const isOnlyModifier: boolean = modifierKeys.has(keyCode)
  const character = isOnlyModifier
    ? null
    : keyMap[keyCode] ?? String.fromCharCode(keyCode)

  return {
    character,
    modifiers: {
      cmd: metaKey,
      ctrl: ctrlKey,
      alt: altKey,
      shift: shiftKey
    }
  }
}

function buildKeyArray (event: KeyboardEvent, options: Options): string[] {
  const map: EventKey = buildKeyMap(event)
  const modifiers: Modifiers = map.modifiers
  const result = []

  if (modifiers.cmd) result.push(options.cmd)
  if (modifiers.ctrl) result.push(options.ctrl)
  if (modifiers.alt) result.push(options.alt)
  if (modifiers.shift) result.push(options.shift)
  if (map.character != null) result.push(map.character)

  return result
}

function details (event: KeyboardEvent): KeyEventDetails {
  const map: EventKey = buildKeyMap(event)
  const mods: Modifiers = map.modifiers
  const hasModifier = mods.cmd || mods.ctrl || mods.alt || mods.shift

  return {
    hasKey: map.character != null,
    hasModifier,
    map
  }
}

function event2string (options: Options = defaultOptions): (event: KeyboardEvent) => string {
  const opts: Options = { ...defaultOptions, ...options }
  return function (event: KeyboardEvent): string {
    return buildKeyArray(event, opts).join(opts.joinWith)
  }
}

export { details, event2string }
