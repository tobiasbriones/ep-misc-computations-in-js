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
import { Polynomial } from './polynomial.mjs';

test('default polynomial is equals to zero', () => {
  const polynomial = new Polynomial();

  expect(polynomial.isConstant()).toBe(true);
  expect(polynomial.evaluate(0)).toBe(0);
  expect(polynomial.evaluate(-1)).toBe(0);
  expect(polynomial.evaluate(1)).toBe(0);
});

test('polynomial evaluation', () => {
  // ...
});

// keep testing...
