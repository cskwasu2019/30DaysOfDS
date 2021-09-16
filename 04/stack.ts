/*
    A stack is an abstract data type that serves as a collection of elements, with two main principal operations:
    Push, which adds an element to the collection, and
    Pop, which removes the most recently added element that was not yet removed.

    The order in which elements come off a stack gives rise to its alternative name, LIFO (last in, first out). 
*/

export default class Stack {
  private array: number[] = []
  constructor(...args: number[]) {
    this.array.push(...args)
  }

  get length(): number {
    return this.array.length
  }

  pop(): number | undefined {
    if (!this.array.length) {
      return undefined
    }
    return this.array.pop()
  }

  push(value: number): void {
    this.array.push(value)
  }

  toString() {
    return this.array.join(',')
  }
}
