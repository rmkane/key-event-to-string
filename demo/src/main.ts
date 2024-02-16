import './styles.css'

import { details, event2string } from '../../src'

/**
 * Escapes a string for use in a regular expression.
 *
 * @param text - The text to escape.
 * @returns The escaped text.
 */
function escapedRegExp(text: string): RegExp {
  return new RegExp(text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'g')
}

// The plus sign and a placeholder for it.
const PLUS_SIGN = '+'
const PLUS_PLACEHOLDER = '__PLUS__'

// Parses the keys from a string, replacing the plus sign with a placeholder
// to prevent it from being split.
function parseKeys(keys: string, delim: string): string[] {
  return keys === PLUS_SIGN
    ? [PLUS_SIGN]
    : keys
        .replace(
          escapedRegExp(`${delim}${PLUS_SIGN}`),
          `${delim}${PLUS_PLACEHOLDER}`,
        )
        .split(delim)
        .map(key => (key === PLUS_PLACEHOLDER ? PLUS_SIGN : key))
}

const keysEl = document.querySelector<HTMLDivElement>('#keys')!

const joinToken = '+'

const eventCapture = event2string({
  platform: { isMac: true },
  joinWith: joinToken,
})

document.addEventListener('keydown', e => {
  e.preventDefault()
  console.log(details(e))
  renderKeyDownEventKeys(e)
})

const keydownEvent = new KeyboardEvent('keydown', {
  key: 'C',
  keyCode: 67,
  which: 67,
  code: 'KeyC',
  location: 0,
  altKey: false,
  ctrlKey: true,
  metaKey: false,
  shiftKey: true,
  repeat: false,
})

document.dispatchEvent(keydownEvent)

function renderKeyDownEventKeys(e: KeyboardEvent): void {
  const keySequence = eventCapture(e)
  console.log('Sequence:', keySequence)
  const keys = parseKeys(keySequence, joinToken)
  keysEl.replaceChildren(...toKeyComboList(keys))
}

function toKeyComboList(keys: string[]): HTMLElement[] {
  return keys.reduce((elements: HTMLElement[], key: string, index: number) => {
    if (index > 0) {
      elements.push(createSeparator('+'))
    }
    elements.push(createKey(key))
    return elements
  }, [])
}

function createKey(key: string): HTMLDivElement {
  return createElementFromHTML<HTMLDivElement>(`
    <div
      class="flex min-h-32 min-w-32 items-center justify-center rounded-xl border-2 border-b-4 border-purple-950 bg-purple-100 px-8 py-2 font-mono text-8xl text-purple-900"
    >
      ${key}
    </div>
  `)
}

function createSeparator(value: string): HTMLDivElement {
  return createElementFromHTML<HTMLDivElement>(`
    <div class="flex items-center justify-center text-5xl text-purple-500">
      ${value}
    </div>
  `)
}

function createElementFromHTML<T extends HTMLElement>(htmlString: string): T {
  const wrapperElement: HTMLDivElement = document.createElement('div')
  wrapperElement.innerHTML = htmlString.trim()
  return wrapperElement.firstElementChild as T
}
