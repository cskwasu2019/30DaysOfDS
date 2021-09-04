#!/bin/env -S deno run

type SearchResult = number | void

export function linearSearch(
  array: Array<number>,
  target: number
): SearchResult {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === target) {
      return index
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

  let result = linearSearch(numbers, 12)
  verify(result)

  result = linearSearch(numbers, 6)
  verify(result)
}
