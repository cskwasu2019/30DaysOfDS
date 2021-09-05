#!/bin/env -S deno run

class Node {
  // deno-lint-ignore no-explicit-any
  private __data: any
  public next: Node | undefined

  get data() {
    return this.__data
  }

  // deno-lint-ignore no-explicit-any
  constructor(data: any) {
    this.__data = data
  }

  toString() {
    return `<Node: ${this.__data}>`
  }
}

export class LinkedList {
  private head: Node | undefined

  get length(): number {
    let current = this.head
    let count = 0
    while (current) {
      current = current.next
      count++
    }
    return count
  }

  toString(): string {
    const values: Array<string> = []
    let current = this.head

    while (current) {
      if (current === this.head) {
        values.push(`[head: ${current.data}]`)
      } else if (!current.next) {
        values.push(`[tail: ${current.data}]`)
      } else {
        values.push(`[${current.data}]`)
      }
      current = current.next
    }
    return values.join('-> ')
  }

  // deno-lint-ignore no-explicit-any
  add(...args: Array<any>): void {
    for (let i = args.length - 1; i >= 0; i--) {
      const node = new Node(args[i])
      node.next = this.head
      this.head = node
    }
  }

  // deno-lint-ignore no-explicit-any
  remove(value: any): Node | void {
    let parent: Node | undefined
    let current = this.head
    while (current) {
      if (current.data === value) {
        if (parent) {
          parent.next = current.next
        } else {
          this.head = this.head?.next
        }
        current.next = undefined
        return current
      }
      parent = current
      current = current.next
    }
  }

  removeAt(index: number): Node | void {
    let parent: Node | undefined
    let current = this.head
    let position = index

    while (current && position >= 0) {
      if (position === 0) {
        if (parent) {
          parent.next = current.next
        } else {
          this.head = this.head?.next
        }
        current.next = undefined
        return current
      }
      parent = current
      current = current.next
      position--
    }
  }

  // deno-lint-ignore no-explicit-any
  insert(index: number, value: any): void {
    const node = new Node(value)

    let parent: Node | undefined
    let current = this.head

    let position = index

    while (current && position >= 0) {
      if (position === 0) {
        if (parent) {
          parent.next = node
          node.next = current
        } else {
          this.head = current
          node.next = current.next
        }
        return
      }
      position--
      parent = current
      current = current.next
    }
    if (position > 0) {
      throw new Error('Out of bounds')
    }
  }

  // deno-lint-ignore no-explicit-any
  search(value: any): Node | void {
    let current = this.head
    while (current) {
      if (current.data === value) {
        return current
      }
      current = current.next
    }
  }
}

if (import.meta.main) {
  const list = new LinkedList()
  list.add(10, 2, 4, 5)
  console.log(list.toString())

  list.insert(0, 10)
  console.log(list.toString())

  const find = list.search(4)
  console.log(find)

  list.remove(4)
  console.log(list.toString())
}
