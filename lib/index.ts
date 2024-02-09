import type { EventKey, KeyEventDetails, Modifiers, Options } from "./types";

import { defaultOptions } from "./constants";
import { buildKeyMap, buildKeyArray } from "./functions";

function details(event: KeyboardEvent): KeyEventDetails {
  const map: EventKey = buildKeyMap(event);
  const mods: Modifiers = map.modifiers;
  const hasModifier = mods.cmd || mods.ctrl || mods.alt || mods.shift;

  return {
    hasKey: map.character != null,
    hasModifier: hasModifier,
    map: map,
  };
}

function __event2string(event: KeyboardEvent, options: Options): string {
  return buildKeyArray(event, options).join(options.joinWith);
}

function event2string(options: Options = defaultOptions) {
  const opts: Options = { ...defaultOptions, ...options };
  return function (event: KeyboardEvent): string {
    return __event2string(event, opts);
  };
}

export { event2string, details };
