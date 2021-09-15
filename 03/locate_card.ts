/*
    We need to write a program to find the position of a given number in a array of numbers
    arranged in decreasing order. We also need to minimize the number of times we access
    elements from the array.

    Input:
        cards: An array of numbers sorted in decending order e.g [17, 11, 10, 7, 4, 3, 1, 0]
        query: A number whose position in the array is to be determined e.g 7

    Output:
        postion: The position of query in the array cards, E.g 3 in the above case
        [counting from 0]
*/

// check each element of the array until the query has been found
// return null if query doesn't exist in array
function linearSearch(cards: number[], query: number): number | null {
  // create a variable position with the value 0
  let position = 0

  while (position < cards.length) {
    // check if elements at the current position matches the query
    if (cards[position] === query) {
      // Answer found! Return and exit function
      return position
    }

    // increment the position
    position++
  }
  // we have checked all cards, query not found, return null
  return null
}

function binarySearch(cards: number[], query: number): number | null {
  let lo = 0,
    high = cards.length - 1

  while (lo <= high) {
    const mid = Math.floor((lo + high) / 2)
    if (cards[mid] === query) {
      return mid
    } else if (cards[mid] < query) {
      lo = mid + 1
    } else {
      high = mid - 1
    }
  }

  return null
}

export function locateCard(cards: number[], query: number): number | null {
  return binarySearch(cards, query)
}
