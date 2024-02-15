import { JSDOM } from 'jsdom'
import { describe, expect, it } from 'vitest'
import { buildKeyArray, buildKeyMap, mapAlpha } from './utils.js'
import { findByCode, findByKey } from './keys/info.js'

const dom = new JSDOM()
const { KeyboardEvent } = dom.window

describe('Key Map Builder', () => {
  it('builds correct key map for given keyboard event', () => {
    const [keyA] = findByKey('a')
    const event = new KeyboardEvent('keydown', { ...keyA, ctrlKey: true })
    const result = buildKeyMap(event)

    expect(result.character).toBe('A')
    expect(result.modifiers.altKey).toBe(false)
    expect(result.modifiers.ctrlKey).toBe(true)
    expect(result.modifiers.metaKey).toBe(false)
    expect(result.modifiers.shiftKey).toBe(false)
  })

  it('builds correct key map for given keyboard event with Shift key', () => {
    const keyShift = findByCode('Shift')
    const event = new KeyboardEvent('keydown', { ...keyShift, shiftKey: true })
    const result = buildKeyMap(event)

    expect(result.character).toBe('')
  })
})

describe('Key Array Builder', () => {
  it('builds correct key array for given keyboard event and key labels', () => {
    const [keyA] = findByKey('a')
    const event = new KeyboardEvent('keydown', { ...keyA, ctrlKey: true })
    const result = buildKeyArray(event, {
      control: 'ctrl',
    })

    expect(result).toEqual(['ctrl', 'A'])
  })
})

describe('Map Alpha Key', () => {
  it('maps alpha key to correct character', () => {
    expect(mapAlpha('a')).toBe('A')
  })

  it('maps non-alpha key to itself', () => {
    expect(mapAlpha('1')).toBe('1')
  })

  it('maps non-alpha key to itself', () => {
    expect(mapAlpha('ArrowUp')).toBe('ArrowUp')
  })
})
