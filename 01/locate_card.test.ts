import { assert } from 'https://deno.land/std/testing/asserts.ts'
import { locateCard } from './locate_card.ts'

Deno.test('Case 1', () =>
  assert(locateCard([17, 11, 10, 7, 4, 3, 1, 0], 7) === 3)
)

Deno.test('Case 2', () =>
  assert(locateCard([13, 11, 10, 7, 4, 3, 1, 0], 1) === 6)
)

Deno.test('Case 3', () => assert(locateCard([4, 2, 1, -1], 4) === 0))

Deno.test('Case 4', () => assert(locateCard([3, -1, -9, -127], -127) === 3))

Deno.test('Case 5', () => assert(locateCard([6], 6) === 0))

// cards does not contain query
Deno.test('Case 6', () => assert(locateCard([9, 7, 5, 2, -9], 4) === null))

// cards is empty
Deno.test('Case 7', () => assert(locateCard([], 7) === null))

// numbers can repeat in cards
Deno.test('Case 8', () =>
  assert(locateCard([8, 8, 6, 6, 6, 6, 6, 3, 2, 2, 2, 0, 0, 0], 3) === 7)
)

// query occurs multiple times
Deno.test('Case 9', () =>
  assert(locateCard([8, 8, 6, 6, 6, 6, 6, 6, 3, 2, 2, 2, 0, 0, 0], 6) === 2)
)
