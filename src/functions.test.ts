import { JSDOM } from 'jsdom'
import { describe, expect, it } from 'vitest'
import { buildKeyArray, buildKeyMap } from './functions.js'

type KeyboardEventConstructor = new (
  type: string,
  keyboardEventInit?: KeyboardEventInit,
) => KeyboardEvent
type CustomWindow = Window & {
  KeyboardEvent: KeyboardEventConstructor
}

const dom = new JSDOM()
const KeyboardEvent = (dom.window as unknown as CustomWindow).KeyboardEvent

describe('Key Map Builder', () => {
  it('builds correct key map for given keyboard event', () => {
    const event = new KeyboardEvent('keydown', { keyCode: 65, ctrlKey: true })
    const result = buildKeyMap(event)

    expect(result.character).toBe('A')
    expect(result.modifiers.alt).toBe(false)
    expect(result.modifiers.cmd).toBe(false)
    expect(result.modifiers.ctrl).toBe(true)
    expect(result.modifiers.shift).toBe(false)
  })
})

describe('Key Array Builder', () => {
  it('builds correct key array for given keyboard event and key labels', () => {
    const event = new KeyboardEvent('keydown', { keyCode: 65, ctrlKey: true })
    const result = buildKeyArray(event, {
      alt: 'alt',
      cmd: 'cmd',
      ctrl: 'ctrl',
      shift: 'shift',
    })

    expect(result).toEqual(['ctrl', 'A'])
  })
})
