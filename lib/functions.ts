import type { EventKey, Modifiers, Options } from "./types";

import { keyMap, modifierKeys } from "./constants";

function buildKeyMap(event: KeyboardEvent): EventKey {
  const { altKey, ctrlKey, keyCode, metaKey, shiftKey } = event;
  const isOnlyModifier: boolean = modifierKeys.has(keyCode);
  const character = isOnlyModifier
    ? null
    : keyMap[keyCode] ?? String.fromCharCode(keyCode);

  return {
    character: character,
    modifiers: {
      cmd: metaKey,
      ctrl: ctrlKey,
      alt: altKey,
      shift: shiftKey,
    },
  };
}

function buildKeyArray(event: KeyboardEvent, options: Options): string[] {
  const map: EventKey = buildKeyMap(event);
  const modifiers: Modifiers = map.modifiers;
  const result = [];

  if (modifiers.cmd) result.push(options.cmd);
  if (modifiers.ctrl) result.push(options.ctrl);
  if (modifiers.alt) result.push(options.alt);
  if (modifiers.shift) result.push(options.shift);
  if (map.character) result.push(map.character);

  return result;
}

export { buildKeyArray, buildKeyMap };
