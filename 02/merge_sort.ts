/*
    Merge Sort (Divide and Conquer) is a sorting algorithm
    It works by spliting an array into a smaller chunks until a pair as been found
    then merge back the array while sorting them in the process

    Input: array of numbers (unsorted)
    Output: array of numbers (sorted)

*/

export function mergeSort(nums: number[]): number[] {
  // once we have a single or empty element return array, nothing to split
  if (nums.length <= 1) {
    return nums
  }

  let [left, right] = split(nums)
  left = mergeSort(left) // recursive call to split array until we have a single or empty element array
  right = mergeSort(right) // recursive call to split array until we have a single or empty element array

  const result = merge(left, right)
  return result
}

// this function split the array into two chunks - left and right
function split(num: number[]): [number[], number[]] {
  const split = Math.floor(num.length / 2)
  const left = num.slice(0, split)
  const right = num.slice(split)
  return [left, right]
}

// this function is where all the merging and sorting happens
function merge(left: number[], right: number[]): number[] {
  const result = []
  let ii = 0,
    jj = 0

  while (ii < left.length && jj < right.length) {
    if (left[ii] < right[jj]) {
      result.push(left[ii])
      ii++
    } else {
      result.push(right[jj])
      jj++
    }
  }

  while (ii < left.length) {
    result.push(left[ii])
    ii++
  }

  while (jj < right.length) {
    result.push(right[jj])
    jj++
  }

  return result
}
