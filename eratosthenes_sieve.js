/*
 * Copyright (c) 2019 Tobias Briones.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

console.log('');
console.log('%cEratosthenes sieve script', 'font-weight:bold;font-size:24px');

console.log('Getting the first prime numbers up to 101');
console.log(getPrimes());
console.log('');

function fillSieve(sieve, length) {
  let value = (sieve.length === 0) ? 2 : sieve[sieve.length - 1] + 1;
  
  for (let i = 0; i < length; i++) {
    sieve.push(value);
    value++;
  }
}

function remove(sieve, position) {
  sieve[position] = null;
}

function parseSieve(sieve, startPos) {
  let current = sieve[startPos];
  let currentPos = startPos;
  
  while (sieve.length > currentPos + current) {
    currentPos += current;
    
    remove(sieve, currentPos);
  }
}

function runSieve(sieve) {
  let primes = Array();
  
  for (let i = 0; i < sieve.length; i++) {
    if (sieve[i] != null) {
      primes.push(sieve[i]);
      parseSieve(sieve, i);
    }
  }
  return primes;
}

function getPrimes(length = 100) {
  const sieve = Array();
  
  fillSieve(sieve, length);
  return runSieve(sieve);
}
