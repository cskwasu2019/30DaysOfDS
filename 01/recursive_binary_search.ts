#!/bin/env -S deno run

export function recursiveBinarySearch(
  array: Array<number>,
  target: number
): boolean {
  if (array.length === 0) {
    return false
  } else {
    const midpoint = Math.floor(array.length / 2)

    if (array[midpoint] === target) {
      return true
    } else if (array[midpoint] < target) {
      return recursiveBinarySearch(array.slice(midpoint + 1), target)
    } else {
      return recursiveBinarySearch(array.slice(0, midpoint), target)
    }
  }
}

function verify(result: boolean) {
  console.log(`Target found: ${result}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
let result = recursiveBinarySearch(numbers, 12)
verify(result)

result = recursiveBinarySearch(numbers, 6)
verify(result)
