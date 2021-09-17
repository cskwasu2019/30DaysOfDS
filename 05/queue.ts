/*
A Queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence.
The operation of adding an element to the rear of the queue is known as enqueue, and the operation of removing an element from the front is known as dequeue.
The operations of a queue make it a first-in-first-out (FIFO) data structure.
*/

export default class Queue {
  private array: number[] = []
  constructor(...args: number[]) {
    this.array.push(...args)
  }
  get length() {
    return this.array.length
  }

  enqueue(value: number) {
    this.array.push(value)
  }

  dequeue(): number | undefined {
    if (!this.array.length) {
      return undefined
    }
    return this.array.shift()
  }
}
