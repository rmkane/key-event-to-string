import './styles.css'

import { details, event2string } from '../../src'

const keysEl = document.querySelector<HTMLDivElement>('#keys')!

const eventCapture = event2string({
  meta: '⌘',
  control: '⌃',
  alt: '⌥',
  shift: '⇧',
  joinWith: '+',
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
  const keySequence = eventCapture(e).split('+')
  keysEl.replaceChildren(...toKeyComboList(keySequence))
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
