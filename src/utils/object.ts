import type { Maybe } from '../types.js'

/**
 * Check if the provided value is an object
 *
 * @param obj - The value to check
 * @returns True if the value is an object; otherwise, false.
 */
function isObject(obj: unknown): obj is Record<string, unknown> {
  return obj != null && typeof obj === 'object' && !Array.isArray(obj)
}

/**
 * Deep merge two objects together.
 *
 * @param target - The target object to merge into.
 * @param source - The source object to merge from.
 * @returns The merged object.
 */
function deepMergeInner<T extends Record<string, unknown>>(
  target: T,
  source: T,
): T {
  for (const key in source) {
    const targetVal = target[key]
    const sourceVal = source[key]

    if (Array.isArray(targetVal) && Array.isArray(sourceVal)) {
      target[key] = [...targetVal, ...sourceVal] as T[Extract<keyof T, string>]
    } else if (isObject(targetVal) && isObject(sourceVal)) {
      target[key] = deepMergeInner({ ...targetVal }, sourceVal)
    } else {
      target[key] = sourceVal
    }
  }

  return target
}

/**
 * Deep merge multiple objects together.
 *
 * @param objects - The objects to merge.
 * @returns The merged object.
 * @throws An error if less than 2 objects are provided.
 * @throws An error if any value is not an object.
 */
function deepMerge<T extends Record<string, unknown>>(...objects: T[]): T {
  if (objects.length < 2) {
    throw new Error(
      'deepMerge: this function expects at least 2 objects to be provided',
    )
  }

  const nonObjectIndex = objects.findIndex(object => !isObject(object))
  if (nonObjectIndex !== -1) {
    throw new Error(
      `deepMerge: value at index ${nonObjectIndex} is not an object`,
    )
  }

  const target = objects.shift() as T
  let source: T | undefined

  while ((source = objects.shift())) {
    deepMergeInner(target, source)
  }

  return target
}

function pluck<T, K extends keyof T, V>(object: T, key: K): Maybe<V> {
  return object[key] as V
}

export { deepMerge, pluck }
