import { JSDOM } from 'jsdom'
import { describe, expect, it } from 'vitest'
import { buildKeyArray, buildKeyMap } from './utils.js'
import { findByKey } from './keys/info.js'

const dom = new JSDOM()
const { KeyboardEvent } = dom.window

const [keyA] = findByKey('a')

describe('Key Map Builder', () => {
  it('builds correct key map for given keyboard event', () => {
    const event = new KeyboardEvent('keydown', { ...keyA, ctrlKey: true })
    const result = buildKeyMap(event)

    expect(result.character).toBe('A')
    expect(result.modifiers.alt).toBe(false)
    expect(result.modifiers.control).toBe(true)
    expect(result.modifiers.meta).toBe(false)
    expect(result.modifiers.shift).toBe(false)
  })
})

describe('Key Array Builder', () => {
  it('builds correct key array for given keyboard event and key labels', () => {
    const event = new KeyboardEvent('keydown', { ...keyA, ctrlKey: true })
    const result = buildKeyArray(event, {
      alt: 'alt',
      control: 'ctrl',
      meta: 'cmd',
      shift: 'shift',
    })

    expect(result).toEqual(['ctrl', 'A'])
  })
})
