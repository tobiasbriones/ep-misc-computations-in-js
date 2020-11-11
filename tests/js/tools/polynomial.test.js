/*
 * Copyright (c) 2020 Tobias Briones.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { test } from '@jest/globals';
import { Polynomial } from '../../../src/js/tools/polynomial.mjs';

test('default polynomial is equals to zero', () => {
  const polynomial = new Polynomial();

  expect(polynomial.isConstant()).toBe(true);
  expect(polynomial.evaluate(0)).toBe(0);
  expect(polynomial.evaluate(-1)).toBe(0);
  expect(polynomial.evaluate(1)).toBe(0);
});
