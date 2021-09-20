export function fibonacci(num: number): number | undefined {
  if (num < 0) return undefined
  else if (num <= 1) return num
  else return num + <number>fibonacci(num - 1)
}
