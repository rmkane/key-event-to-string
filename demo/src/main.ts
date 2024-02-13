import './styles.css'

import { details, event2string } from '../../lib'

type ElementOptions = {
  text?: string
  classes?: string[]
}

const eventCapture = event2string({
  cmd: '⌘',
  ctrl: '⌃',
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

function renderKeyDownEventKeys(e: KeyboardEvent) {
  const keysEl = document.querySelector<HTMLDivElement>('#keys')!
  const keySequence = eventCapture(e).split('+')
  keysEl.replaceChildren(
    ...keySequence.reduce((elements: Element[], key: string, index: number) => {
      if (index > 0) {
        elements.push(createSeparator('+'))
      }
      elements.push(createKey(key))
      return elements
    }, []),
  )
}

function createKey(key: string) {
  return createEl('div', {
    text: key,
    classes: [
      'flex',
      'items-center',
      'justify-center',
      'min-w-32',
      'min-h-32',
      'px-4',
      'py-2',
      'bg-purple-100',
      'font-mono',
      'text-8xl',
      'text-purple-900',
      'border-2',
      'border-b-4',
      'border-purple-950',
      'rounded-xl',
    ],
  })
}

function createSeparator(value: string) {
  return createEl('div', {
    text: value,
    classes: [
      'flex',
      'items-center',
      'justify-center',
      'text-5xl',
      'text-purple-500',
    ],
  })
}

function createEl(tagName: string, options: ElementOptions) {
  const opts = { text: '', classes: [], ...options }
  const el = document.createElement(tagName)
  el.classList.add(...opts.classes)
  el.textContent = opts.text
  return el
}
