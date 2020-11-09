/*
 * Copyright (c) 2019 Tobias Briones.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function runEratosthenesSieveExample() {
  console.log('');
  console.log('%cEratosthenes sieve script', 'font-weight:bold;font-size:24px');

  console.log('Getting the first prime numbers up to 101');
  console.log(getPrimes());
  console.log('');
}

export function getPrimes(length = 100) {
  const sieve = Array();

  fillSieve(sieve, length);
  return runSieve(sieve);
}

function fillSieve(sieve, length) {
  const initialValue = sieve => {
    return (sieve.length === 0) ? 2 : sieve[sieve.length - 1] + 1
  };
  let value = initialValue(sieve);

  for (let i = 0; i < length; i++) {
    sieve.push(value);
    value++;
  }
}

function runSieve(sieve) {
  const primes = Array();

  for (let i = 0; i < sieve.length; i++) {
    if (sieve[i] != null) {
      primes.push(sieve[i]);
      parseSieve(sieve, i);
    }
  }
  return primes;
}

function parseSieve(sieve, startPos) {
  let current = sieve[startPos];
  let currentPos = startPos;

  while (sieve.length > currentPos + current) {
    currentPos += current;

    remove(sieve, currentPos);
  }
}

function remove(sieve, position) {
  sieve[position] = null;
}
