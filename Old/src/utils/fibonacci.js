/* global BigInt */

export const MAXIMUM_ARRAY_LENGTH_FOR_MEMOIZATION = 10_000;
export const initialCache = [BigInt(0), BigInt(1), BigInt(1)];
export let fibonacciCache = [...initialCache];

export function cleanFibonacciCache() {
  fibonacciCache = [...initialCache];
}

export function FibonacciIterativeMemoized(naturalNumber) {
  if (!(fibonacciCache[naturalNumber] === undefined)) {
    return fibonacciCache[naturalNumber];
  }
  const N = fibonacciCache.length;
  for (let i = N; i <= naturalNumber; i++) {
    const calc = fibonacciCache[i - 1] + fibonacciCache[i - 2];
    fibonacciCache[i] = calc;
  }
  return fibonacciCache[naturalNumber];
}
export function FibonacciIterative(naturalNumber) {
  if (!(fibonacciCache[naturalNumber] === undefined)) {
    return fibonacciCache[naturalNumber];
  }
  const N = fibonacciCache.length;
  let lastValue = fibonacciCache[N - 1];
  let penultimateValue = fibonacciCache[N - 2];
  let current;
  for (let i = N; i <= naturalNumber; i++) {
    current = lastValue + penultimateValue;
    penultimateValue = lastValue;
    lastValue = current;
  }

  return current;
}
export function Fibonacci(naturalNumber) {
  if (naturalNumber < MAXIMUM_ARRAY_LENGTH_FOR_MEMOIZATION) {
    return FibonacciIterativeMemoized(naturalNumber);
  }

  return FibonacciIterative(naturalNumber);
}
