import { assert } from 'https://deno.land/std/testing/asserts.ts'
import Stack from './stack.ts'

Deno.test('Initialized empty stack should have 0 length', () => {
  const stack = new Stack()
  assert(stack.length === 0)
})

Deno.test('Can pass values while initializing stack', () => {
  const stack = new Stack(1, 5, 5)
  assert(stack.length === 3)
})

Deno.test('Popping removes item from stack', () => {
  const stack = new Stack(1)
  assert(stack.length === 1)

  assert(stack.pop() === 1)

  // @ts-ignore
  assert(stack.length === 0)
})

Deno.test('Pushing adds item to stack', () => {
  const stack = new Stack()
  assert(stack.length === 0)

  stack.push(10)

  // @ts-ignore
  assert(stack.length === 1)
  assert(stack.toString() === '10')
})

Deno.test('Popping empty stack returns undefined', () => {
  const stack = new Stack()
  assert(typeof stack.pop() === 'undefined')
})
