import { assert } from 'https://deno.land/std/testing/asserts.ts'
import { mergeSort } from './merge_sort.ts'

const compareArray = (left: number[], right: number[]): boolean =>
  JSON.stringify(left) === JSON.stringify(right)

// check empty array actually return empty
Deno.test('Case 1', () => assert(compareArray(mergeSort([]), [])))

Deno.test('Case 2', () =>
  assert(compareArray(mergeSort([4, 3, 2, 1]), [1, 2, 3, 4]))
)

// check repeating numbers
Deno.test('Case 3', () =>
  assert(
    compareArray(mergeSort([6, 6, 2, 1, 3, 3, 1, 0]), [0, 1, 1, 2, 3, 3, 6, 6])
  )
)

// check negetive numbers
Deno.test('Case 4', () =>
  assert(compareArray(mergeSort([4, 9, -7, 16, 0, 4]), [-7, 0, 4, 4, 9, 16]))
)
