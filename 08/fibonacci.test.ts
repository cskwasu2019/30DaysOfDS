import { assert } from 'https://deno.land/std/testing/asserts.ts'
import { fibonacci } from './fibonacci.ts'

Deno.test('Case one', () => assert(fibonacci(0) === 0))

Deno.test('Case two', () => assert(fibonacci(1) === 1))

Deno.test('Case three', () => assert(fibonacci(6) === 21))

Deno.test('Case four', () => assert(typeof fibonacci(-1) === 'undefined'))
