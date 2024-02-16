/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Maybe } from '../types.js'

/**
 * Check if the provided value is an object
 *
 * @param obj - The value to check
 * @returns True if the value is an object; otherwise, false.
 */
function isObject(obj: unknown): obj is Record<string, any> {
  return obj != null && typeof obj === 'object' && !Array.isArray(obj)
}

/**
 * Deep merge two objects together.
 *
 * @param target - The target object to merge into.
 * @param source - The source object to merge from.
 * @returns The merged object.
 */
function deepMergeInner<T extends Record<string, any>>(target: T, source: T) {
  for (const key in source) {
    const targetValue = target[key]
    const sourceValue = source[key]

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue)
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = deepMergeInner(Object.assign({}, targetValue), sourceValue)
    } else {
      target[key] = sourceValue
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
function deepMerge<T extends Record<string, any>>(...objects: T[]) {
  if (objects.length < 2) {
    throw new Error(
      'deepMerge: this function expects at least 2 objects to be provided',
    )
  }

  if (objects.some(object => !isObject(object))) {
    throw new Error('deepMerge: all values should be of type "object"')
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
