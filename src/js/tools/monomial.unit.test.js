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

  expect(monomial.factor).toBe(0);
  expect(monomial.exponent).toBe(0);
  expect(monomial.isConstant).toBe(true);
  expect(monomial.isFactorNegative).toBe(false);
  expect(monomial.evaluate(0)).toBe(0);
  expect(monomial.evaluate(-1)).toBe(0);
  expect(monomial.evaluate(1)).toBe(0);
});

test('monomial evaluation (x^2)', () => {
  const monomial = new Monomial(1, 2);

  expect(monomial.factor).toBe(1);
  expect(monomial.exponent).toBe(2);
  expect(monomial.isConstant).toBe(false);
  expect(monomial.isFactorNegative).toBe(false);
  expect(monomial.evaluate(0)).toBe(0);
  expect(monomial.evaluate(1)).toBe(1);
  expect(monomial.evaluate(-1)).toBe(1);
  expect(monomial.evaluate(10)).toBe(100);
  expect(monomial.evaluate(-10)).toBe(100);
});

test('monomial evaluation (-x^2)', () => {
  const monomial = new Monomial(-1, 2);

  expect(monomial.factor).toBe(-1);
  expect(monomial.exponent).toBe(2);
  expect(monomial.isConstant).toBe(false);
  expect(monomial.isFactorNegative).toBe(true);
  expect(monomial.evaluate(0)).toBe(0);
  expect(monomial.evaluate(1)).toBe(-1);
  expect(monomial.evaluate(-1)).toBe(-1);
  expect(monomial.evaluate(10)).toBe(-100);
  expect(monomial.evaluate(-10)).toBe(-100);
});

test('monomial evaluation (4x^5)', () => {
  const monomial = new Monomial(4, 5);

  expect(monomial.factor).toBe(4);
  expect(monomial.exponent).toBe(5);
  expect(monomial.isConstant).toBe(false);
  expect(monomial.isFactorNegative).toBe(false);
  expect(monomial.evaluate(0)).toBe(0);
  expect(monomial.evaluate(1)).toBe(4);
  expect(monomial.evaluate(-1)).toBe(-4);
  expect(monomial.evaluate(10)).toBe(400_000);
  expect(monomial.evaluate(-10)).toBe(-400_000);
});

test('monomial evaluation (-4x^5)', () => {
  const monomial = new Monomial(-4, 5);

  expect(monomial.factor).toBe(-4);
  expect(monomial.exponent).toBe(5);
  expect(monomial.isConstant).toBe(false);
  expect(monomial.isFactorNegative).toBe(true);
  expect(monomial.evaluate(0)).toBe(0);
  expect(monomial.evaluate(1)).toBe(-4);
  expect(monomial.evaluate(-1)).toBe(4);
  expect(monomial.evaluate(10)).toBe(-400_000);
  expect(monomial.evaluate(-10)).toBe(400_000);
});

test('throws exception for invalid args', () => {
  expect(
    () => new Monomial(1, -5)
  ).toThrowError('The exponent is a non-negative integer: -5');
});

test('toString', () => {
  const m1 = new Monomial(5, 2);
  const m2 = new Monomial(-5, 2);

  expect(m1.toString()).toBe(' 5x^2 ');
  expect(m2.toString()).toBe(' -5x^2 ');
});
