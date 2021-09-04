#!/bin/env -S deno run

type SearchResult = number | void

export function binarySearch(
  array: Array<number>,
  target: number
): SearchResult {
  let first = 0,
    last = array.length - 1

  while (first <= last) {
    const midpoint = Math.floor((first + last) / 2)

    if (array[midpoint] === target) {
      return midpoint
    } else if (array[midpoint] < target) {
      first = midpoint + 1
    } else {
      last = midpoint - 1
    }
  }
}

function verify(index: SearchResult): void {
  if (index !== undefined) {
    console.log(`Target found at index: ${index}`)
  } else {
    console.log('Target not found in array')
  }
}

if (import.meta.main) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  let result = binarySearch(numbers, 12)
  verify(result)

  result = binarySearch(numbers, 6)
  verify(result)
}
