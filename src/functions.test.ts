import { JSDOM } from 'jsdom'
import { describe, expect, it } from 'vitest'
import { buildKeyArray, buildKeyMap } from './functions.js'

const dom = new JSDOM()
const { KeyboardEvent } = dom.window

describe('Key Map Builder', () => {
  it('builds correct key map for given keyboard event', () => {
    const event = new KeyboardEvent('keydown', { keyCode: 65, ctrlKey: true })
    const result = buildKeyMap(event)

    expect(result.character).toBe('A')
    expect(result.modifiers.alt).toBe(false)
    expect(result.modifiers.ctrl).toBe(true)
    expect(result.modifiers.meta).toBe(false)
    expect(result.modifiers.shift).toBe(false)
  })
})

describe('Key Array Builder', () => {
  it('builds correct key array for given keyboard event and key labels', () => {
    const event = new KeyboardEvent('keydown', { keyCode: 65, ctrlKey: true })
    const result = buildKeyArray(event, {
      alt: 'alt',
      control: 'ctrl',
      meta: 'cmd',
      shift: 'shift',
    })

    expect(result).toEqual(['ctrl', 'A'])
  })
})
