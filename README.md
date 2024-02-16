# JavaScript keyboard event to string

**Note:** This is a fork of [key-event-to-string](https://www.npmjs.com/package/key-event-to-string) package by Florian Hartmann.

This library converts a `KeyboardEvent` object for a `keydown` event into a human-readable format. The idea is to use this for UI components that let the user choose keyboard shortcuts.

In other words: This library provides the inverse functionality of common keyboard shortcut binding libraries like [keymaster](https://github.com/madrobby/keymaster) or [Mousetrap](https://craig.is/killing/mice).

## Installation

```sh
pnpm install @rmkane/key-event-to-string
```

## Usage

To utilize the `KeyboardEventProcessor`, an instance must be instantiated with configuration `options`. This processor provides a `processKeyboardEvent` method that converts a `KeyboardEvent` into a `KeyboardEventDetails` instance. The resulting `KeyboardEventDetails` object offers several methods to retrieve key information as a string, an array, or detailed diagnostics.

```js
const processor = new KeyboardEventProcessor(options)

document.body.addEventListener('keydown', e => {
  const details = processor.processKeyboardEvent(e)

  // Formatted keys as a string or an array
  console.log(details.getKeysAsString()) // "Ctrl + A"
  console.log(details.getKeysAsArray()) // ["Ctrl", "A"]

  // Diagnostic details
  console.log(details.getKeyEventDetails())
  // {
  //   "hasKey": true,
  //   "hasModifier": true,
  //   "map": {
  //     "data": {
  //       "key": "a",
  //       "code": "KeyA"
  //     },
  //     "modifiers": {
  //       "altKey": false,
  //       "ctrlKey": true,
  //       "metaKey": false,
  //       "shiftKey": false
  //     }
  //   }
  // }
})
```

### Import

#### CommonJS

```js
const KeyEventToString = require('key-event-to-string')
const { KeyboardEventProcessor } = KeyEventToString
```

#### Module

```js
import KeyEventToString from 'key-event-to-string'
const { KeyboardEventProcessor } = KeyEventToString
```

#### Browser

```js
const { KeyboardEventProcessor } = window.KeyEventToString
```

### Options

`options` is optional and can be an object with the following properties:

| key                 | value                                        | default |
| :------------------ | :------------------------------------------- | :------ |
| `keyAliases`        | Modifier, arrow, and mobile keys             |         |
| `codeAliases`       | Physical keys that have Shift-modifiers      |         |
| `platform`          | Platform options                             |         |
| `platform.isMac`    | Use macOS Meta keys                          | `false` |
| `platform.isMobile` | Use shorthand keys for mobile keyboards      | `false` |
| `joinWith`          | The string that's displayed between all keys | `" + "` |

For example this could be used to get the Mac style keyboard shortcut strings:

```js
const options = {
  keyAliases: {
    Meta: '⌘',
    Control: '⌃',
    Alt: '⌥',
    Shift: '⇧',
  },
  joinWith: '+',
}
```

The default settings are compatible with the format that common keyboard shortcut libraries, like [keymaster](https://github.com/madrobby/keymaster) or [Mousetrap](https://craig.is/killing/mice), accept.

### Detailed information

The result of `processor.processKeyboardEvent(e)` can be used to get more details about the event. This can be useful for validating keyboard shortcuts, e.g. for requiring a modifier and a normal key.

It returns an object with this information:

- `hasModifier`: True iff atleast one of cmd, ctrl, alt or shift was pressed
- `hasKey`: True iff a key other than a modifier is pressed
- `map`: An object containing information which modifier is active and what
  other key is pressed

## Disclaimer

This library is meant to parse only `keydown` events. The `keypress`/`keyup` events have small differences, e.g. `keydown` is needed to capture `Command` on a Mac. So `keydown` is advisible for this anyways.
