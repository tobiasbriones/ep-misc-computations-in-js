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

function fillCriba(criba, length) {
    var value = (criba.length === 0) ? 2 : criba[criba.length - 1] + 1;

    for(let i = 0; i < length; i++) {
        criba.push(value);
        value++;
    }
}

function remove(criba, position) {
    criba[position] = null;
}

function parseCriba(criba, startPos) {
    var current = criba[startPos];
    var currentPos = startPos;

    while(criba.length > currentPos + current) {
        currentPos += current;

        remove(criba, currentPos);
    }
}

function runCriba(criba) {
    var primes = Array();

    for(let i = 0; i < criba.length; i++) {
        if(criba[i] != null) {
            primes.push(criba[i]);
            parseCriba(criba, i);
        }
    }
    return primes;
}

function getPrimes(length = 100) {
    const criba = Array();

    fillCriba(criba, length);
    return runCriba(criba);
}
