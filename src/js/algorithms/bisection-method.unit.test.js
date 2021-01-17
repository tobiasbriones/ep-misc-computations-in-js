/*
 * Copyright (c) 2020 Tobias Briones. All rights reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * This file is part of Example Project: Miscellaneous computations in JS.
 *
 * This source code is licensed under the MIT License found in the
 * LICENSE file in the root directory of this source tree or at
 * https://opensource.org/licenses/MIT.
 */

import { test } from '@jest/globals';
import { Polynomial } from '../tools/polynomial.mjs';
import { Monomial } from '../tools/monomial.mjs';
import { bisect } from './bisection-method.mjs';

test('finds root of sample in [-1, 0]', () => {
  const f = createFunctionSample();
  const bisection = bisect(f, [-1, 0]);
  const result = bisection.result;
  const expected = {
    c: -0.33287980602384337,
    f: 0,
    error: 3.552713678800501e-15
  };

  expect(result.c).toBe(expected.c);
  expect(result.error).toBe(expected.error);
  expect(f.evaluate(result.c)).toBe(expected.f);
});

test('finds root of sample in [1, 2] and 8 iterations', () => {
  const f = createFunctionSample();
  const bisection = bisect(f, [1, 2], 8);
  const result = bisection.result;
  const expected = {
    c: 1.30078125,
    f: -0.058104221286864544,
    error: 0.00390625
  };

  expect(result.c).toBe(expected.c);
  expect(result.error).toBe(expected.error);
  expect(f.evaluate(result.c)).toBe(expected.f);
});

function createFunctionSample() {
  const f = new Polynomial();

  // f(x) = x^6 - 3x - 1
  f.addMonomial(new Monomial(1, 6));
  f.addMonomial(new Monomial(-3, 1));
  f.addMonomial(new Monomial(-1));
  return f;
}
