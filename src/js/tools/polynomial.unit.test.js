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
import { Monomial } from './monomial.mjs';

test('default polynomial is equals to zero', () => {
  const polynomial = new Polynomial();

  expect(polynomial.isConstant).toBe(true);
  expect(polynomial.evaluate(0)).toBe(0);
  expect(polynomial.evaluate(-1)).toBe(0);
  expect(polynomial.evaluate(1)).toBe(0);
});

test('polynomial evaluation', () => {
  const testData = createTestData();

  // I don't care about the toString method for this program, I have styled polynomial outputs as
  // strings on other occasions; that's why I leave it commented
  testData.methods.forEach(data => {
      // expect(data.polynomial.toString()).toBe(data.expected.toString);
      expect(data.polynomial.isConstant).toBe(data.expected.isConstant);
    }
  );

  testData.evaluations.forEach(
    e => expect(e.polynomial.evaluate(e.point)).toBe(e.expected)
  );
});

function createTestData() {
  const evenPol = new Polynomial();
  const oddPol = new Polynomial();
  const otherPol = new Polynomial();
  const p1 = -5;
  const p2 = -1;
  const p3 = 0;
  const p4 = 1;
  const p5 = 5;

  evenPol.addMonomial(new Monomial(1, 4));
  evenPol.addMonomial(new Monomial(-10, 2));
  evenPol.addMonomial(new Monomial(-8));

  oddPol.addMonomial(new Monomial(1, 5));
  oddPol.addMonomial(new Monomial(-2, 3));
  oddPol.addMonomial(new Monomial(5, 1));

  otherPol.addMonomial(new Monomial(-9.5, 4));
  otherPol.addMonomial(new Monomial(1.5, 3));
  otherPol.addMonomial(new Monomial(-8, 2));
  otherPol.addMonomial(new Monomial(-0.25, 1));
  otherPol.addMonomial(new Monomial(5));
  return {
    methods: [
      {
        polynomial: evenPol,
        expected: {
          toString: 'x^4 - 10x^2 - 8',
          isConstant: false
        }
      },
      {
        polynomial: oddPol,
        expected: {
          toString: 'x^5 - 2x^3 + 5x',
          isConstant: false
        }
      },
      {
        polynomial: otherPol,
        expected: {
          toString: '-9.5x^4 + 1.5x^3 - 8x^2 -0.25x + 5',
          isConstant: false
        }
      }
    ],
    evaluations: [
      {
        polynomial: evenPol,
        point: p1,
        expected: 367
      },
      {
        polynomial: evenPol,
        point: p2,
        expected: -17
      },
      {
        polynomial: evenPol,
        point: p3,
        expected: -8
      },
      {
        polynomial: evenPol,
        point: p4,
        expected: -17
      },
      {
        polynomial: evenPol,
        point: p5,
        expected: 367
      },
      {
        polynomial: oddPol,
        point: p1,
        expected: -2_900
      },
      {
        polynomial: oddPol,
        point: p2,
        expected: -4
      },
      {
        polynomial: oddPol,
        point: p3,
        expected: 0
      },
      {
        polynomial: oddPol,
        point: p4,
        expected: 4
      },
      {
        polynomial: oddPol,
        point: p5,
        expected: 2_900
      },
      {
        polynomial: otherPol,
        point: p1,
        expected: -6_318.75
      },
      {
        polynomial: otherPol,
        point: p2,
        expected: -13.75
      },
      {
        polynomial: otherPol,
        point: p3,
        expected: 5
      },
      {
        polynomial: otherPol,
        point: p4,
        expected: -11.25
      },
      {
        polynomial: otherPol,
        point: p5,
        expected: -5_946.25
      }
    ]
  };
}
