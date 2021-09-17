import { assert } from 'https://deno.land/std/testing/asserts.ts'
import Queue from './queue.ts'

Deno.test('Initialized empty queue should have 0 length', () => {
  const queue = new Queue()
  assert(queue.length === 0)
})

Deno.test('Can pass values while initializing queue', () => {
  const queue = new Queue(1, 5, 5)
  assert(queue.length === 3)
})

Deno.test('Can Enqueue', () => {
  const queue = new Queue()
  queue.enqueue(10)
  assert(queue.length === 1)
})

Deno.test('Can Dequeue', () => {
  const queue = new Queue(10)
  assert(queue.dequeue() === 10)
  assert(queue.length === 0)
})
