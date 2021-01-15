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
import { Monomial } from './monomial.mjs';

test('is default monomial equals to zero', () => {
  const monomial = new Monomial();

  expect(monomial.getFactor()).toBe(0);
  expect(monomial.getExponent()).toBe(0);
  expect(monomial.isConstant()).toBe(true);
  expect(monomial.evaluate(0)).toBe(0);
  expect(monomial.evaluate(-1)).toBe(0);
  expect(monomial.evaluate(1)).toBe(0);
});

test('monomial evaluation', () => {
  // ...
});

// keep testing...
