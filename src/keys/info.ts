import type { KeyData, Maybe } from '../types'

/**
 * A list of key codes and their corresponding keys and codes.
 *
 * Based on: https://www.toptal.com/developers/keycode/table
 */
const keys: KeyData[] = [
  { which: 0, key: 'Unidentified', code: 'Unidentified' },
  { which: 3, key: 'Cancel', code: 'Pause' },
  { which: 8, key: 'Backspace', code: 'Backspace' },
  { which: 9, key: 'Tab', code: 'Tab' },
  { which: 12, key: 'Clear', code: 'NumLock' },
  { which: 13, key: 'Enter', code: 'Enter' },
  { which: 16, key: 'Shift', code: 'ShiftLeft' },
  { which: 16, key: 'Shift', code: 'ShiftRight' },
  { which: 17, key: 'Control', code: 'ControlLeft' },
  { which: 18, key: 'Alt', code: 'AltLeft' },
  { which: 19, key: 'Pause', code: 'Pause' },
  { which: 20, key: 'CapsLock', code: 'CapsLock' },
  { which: 21, key: 'Unidentified', code: 'Lang1' },
  { which: 25, key: 'Unidentified', code: 'Lang2' },
  { which: 27, key: 'Escape', code: 'Escape' },
  { which: 32, key: ' ', code: 'Space' },
  { which: 33, key: 'PageUp', code: 'Numpad9' },
  { which: 34, key: 'PageDown', code: 'Numpad3' },
  { which: 35, key: 'End', code: 'Numpad1' },
  { which: 36, key: 'Home', code: 'Numpad7' },
  { which: 37, key: 'ArrowLeft', code: 'ArrowLeft' },
  { which: 38, key: 'ArrowUp', code: 'ArrowUp' },
  { which: 39, key: 'ArrowRight', code: 'ArrowRight' },
  { which: 40, key: 'ArrowDown', code: 'ArrowDown' },
  { which: 44, key: 'F13', code: 'F13' },
  { which: 45, key: 'Insert', code: 'Numpad0' },
  { which: 46, key: 'Delete', code: 'NumpadDecimal' },
  { which: 48, key: '0', code: 'Digit0' },
  { which: 49, key: '1', code: 'Digit1' },
  { which: 50, key: '2', code: 'Digit2' },
  { which: 51, key: '3', code: 'Digit3' },
  { which: 52, key: '4', code: 'Digit4' },
  { which: 53, key: '5', code: 'Digit5' },
  { which: 54, key: '6', code: 'Digit6' },
  { which: 55, key: '7', code: 'Digit7' },
  { which: 56, key: '8', code: 'Digit8' },
  { which: 57, key: '9', code: 'Digit9' },
  { which: 58, key: ':', code: 'Period' },
  { which: 59, key: ';', code: 'Semicolon' },
  { which: 60, key: '<', code: 'Backquote' },
  { which: 61, key: '=', code: 'Equal' },
  { which: 63, key: 'ß', code: 'Minus' },
  { which: 65, key: 'a', code: 'KeyA' },
  { which: 66, key: 'b', code: 'KeyB' },
  { which: 67, key: 'c', code: 'KeyC' },
  { which: 68, key: 'd', code: 'KeyD' },
  { which: 69, key: 'e', code: 'KeyE' },
  { which: 70, key: 'f', code: 'KeyF' },
  { which: 71, key: 'g', code: 'KeyG' },
  { which: 72, key: 'h', code: 'KeyH' },
  { which: 73, key: 'i', code: 'KeyI' },
  { which: 74, key: 'j', code: 'KeyJ' },
  { which: 75, key: 'k', code: 'KeyK' },
  { which: 76, key: 'l', code: 'KeyL' },
  { which: 77, key: 'm', code: 'KeyM' },
  { which: 78, key: 'n', code: 'KeyN' },
  { which: 79, key: 'o', code: 'KeyO' },
  { which: 80, key: 'p', code: 'KeyP' },
  { which: 81, key: 'q', code: 'KeyQ' },
  { which: 82, key: 'r', code: 'KeyR' },
  { which: 83, key: 's', code: 'KeyS' },
  { which: 84, key: 't', code: 'KeyT' },
  { which: 85, key: 'u', code: 'KeyU' },
  { which: 86, key: 'v', code: 'KeyV' },
  { which: 87, key: 'w', code: 'KeyW' },
  { which: 88, key: 'x', code: 'KeyX' },
  { which: 89, key: 'y', code: 'KeyY' },
  { which: 90, key: 'z', code: 'KeyZ' },
  { which: 91, key: 'Meta', code: 'MetaLeft' },
  { which: 92, key: 'Meta', code: 'MetaRight' },
  { which: 93, key: 'ContextMenu', code: 'ContextMenu' },
  { which: 95, key: 'Standby' },
  { which: 96, key: '0', code: 'Numpad0' },
  { which: 97, key: '1', code: 'Numpad1' },
  { which: 98, key: '2', code: 'Numpad2' },
  { which: 99, key: '3', code: 'Numpad3' },
  { which: 100, key: '4', code: 'Numpad4' },
  { which: 101, key: '5', code: 'Numpad5' },
  { which: 102, key: '6', code: 'Numpad6' },
  { which: 103, key: '7', code: 'Numpad7' },
  { which: 104, key: '8', code: 'Numpad8' },
  { which: 105, key: '9', code: 'Numpad9' },
  { which: 106, key: '*', code: 'NumpadMultiply' },
  { which: 107, key: '+', code: 'NumpadAdd' },
  { which: 108, key: ',', code: 'NumpadDecimal' },
  { which: 109, key: '-', code: 'NumpadSubtract' },
  { which: 110, key: '.', code: 'NumpadDecimal' },
  { which: 111, key: '/', code: 'NumpadDivide' },
  { which: 112, key: 'F1', code: 'F1' },
  { which: 113, key: 'F2', code: 'F2' },
  { which: 114, key: 'F3', code: 'F3' },
  { which: 115, key: 'F4', code: 'F4' },
  { which: 116, key: 'F5', code: 'F5' },
  { which: 117, key: 'F6', code: 'F6' },
  { which: 118, key: 'F7', code: 'F7' },
  { which: 119, key: 'F8', code: 'F8' },
  { which: 120, key: 'F9', code: 'F9' },
  { which: 121, key: 'F10', code: 'F10' },
  { which: 122, key: 'F11', code: 'F11' },
  { which: 123, key: 'F12', code: 'F12' },
  { which: 124, key: 'F13', code: 'F13' },
  { which: 125, key: 'F14', code: 'F14' },
  { which: 126, key: 'F15', code: 'F15' },
  { which: 127, key: 'F16', code: 'F16' },
  { which: 128, key: 'F17', code: 'F17' },
  { which: 129, key: 'F18', code: 'F18' },
  { which: 130, key: 'F19', code: 'F19' },
  { which: 131, key: 'F20', code: 'F20' },
  { which: 132, key: 'F21', code: 'F21' },
  { which: 133, key: 'F22', code: 'F22' },
  { which: 134, key: 'F23', code: 'F23' },
  { which: 135, key: 'F24', code: 'F24' },
  { which: 136, key: 'F25', code: 'F25' },
  { which: 137, key: 'F26', code: 'F26' },
  { which: 138, key: 'F27', code: 'F27' },
  { which: 139, key: 'F28', code: 'F28' },
  { which: 140, key: 'F29', code: 'F29' },
  { which: 141, key: 'F30', code: 'F30' },
  { which: 142, key: 'F31', code: 'F31' },
  { which: 143, key: 'F32', code: 'F32' },
  { which: 144, key: 'NumLock', code: 'NumLock' },
  { which: 145, key: 'ScrollLock', code: 'ScrollLock' },
  { which: 160, key: '^', code: 'BracketLeft' },
  { which: 161, key: 'Dead', code: 'BracketRight' },
  { which: 163, key: '#', code: 'Backquote' },
  { which: 164, key: '$', code: 'Backslash' },
  { which: 165, key: '^ù', code: 'Quote' },
  { which: 169, key: '©', code: 'Copyright' },
  { which: 170, key: '*', code: 'Backslash' },
  { which: 171, key: '+', code: 'BracketRight' },
  { which: 173, key: '-', code: 'Minus' },
  { which: 176, key: 'MediaTrackNext', code: 'MediaTrackNext' },
  { which: 177, key: 'MediaTrackPrevious', code: 'MediaTrackPrevious' },
  { which: 181, key: 'AudioVolumeMute', code: 'VolumeMute' },
  { which: 182, key: 'AudioVolumeDown', code: 'VolumeDown' },
  { which: 183, key: 'AudioVolumeUp', code: 'VolumeUp' },
  { which: 186, key: ';', code: 'Semicolon' },
  { which: 187, key: '=', code: 'Equal' },
  { which: 188, key: ',', code: 'Comma' },
  { which: 189, key: '-', code: 'Minus' },
  { which: 190, key: '.', code: 'Period' },
  { which: 191, key: '/', code: 'Slash' },
  { which: 192, key: '`', code: 'Backquote' },
  { which: 193, key: '/', code: 'IntlRo' },
  { which: 194, key: '.', code: 'NumpadComma' },
  { which: 219, key: '[', code: 'BracketLeft' },
  { which: 220, key: '\\', code: 'Backslash' },
  { which: 221, key: ']', code: 'BracketRight' },
  { which: 222, key: "'", code: 'Quote' },
  { which: 223, key: '`', code: 'Backquote' },
  { which: 224, key: 'Meta', code: 'OSLeft' },
  { which: 225, key: 'AltGraph', code: 'AltRight' },
  { which: 226, key: '\\', code: 'IntlBackslash' },
  { which: 229, key: 'Dead', code: 'Backquote' },
  { which: 255, key: 'WakeUp', code: 'WakeUp' },
]

/**
 * Find a key by its code.
 *
 * @param code The code to search for.
 * @returns The key info, if found.
 */
function findByCode(code: string): Maybe<KeyData> {
  return keys.find(k => k.code === code)
}

/**
 * Find a key by its key.
 *
 * @param key The key to search for.
 * @returns The key info, if found.
 */
function findByKey(key: string): KeyData[] {
  return keys.filter(k => k.key === key)
}

/**
 * Find a key by its which.
 *
 * @param which The which to search for.
 * @returns The key info, if found.
 */
function findByWhich(which: number): KeyData[] {
  return keys.filter(k => k.which === which)
}

export { findByCode, findByKey, findByWhich, keys }
