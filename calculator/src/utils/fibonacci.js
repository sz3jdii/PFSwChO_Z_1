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
  const publicIp = require("react-public-ip");
  (async () => {
      const apiUrl = '/api/';
      const ipv4 = await publicIp.v4() || "";
      fetch(apiUrl+'read/'+ipv4.split('.').join(''))
        .then(async response => {
            const data = await response.json();
            const previousValue = data.data;
            let newValue = naturalNumber;
            if(previousValue){
              newValue = newValue+'+'+previousValue;
            }
            fetch(apiUrl+'write/'+ipv4.split('.').join('')+'/'+newValue)
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
      });
  })();
  if (naturalNumber < MAXIMUM_ARRAY_LENGTH_FOR_MEMOIZATION) {
    return FibonacciIterativeMemoized(naturalNumber);
  }
  return FibonacciIterative(naturalNumber);
}
