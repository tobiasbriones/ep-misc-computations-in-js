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

import { VARIABLE_LITERAL_CHAR } from './math.mjs';

export class Monomial {
  #factor;
  #exponent;

  constructor(factor = 0, exponent = 0) {
    if (exponent < 0) {
      const msg = `The exponent is a non-negative integer: ${ exponent }`;
      throw new Error(msg);
    }
    this.#factor = factor;
    this.#exponent = exponent;
  }

  toString() {
    return ` ${ this.#factor }${ VARIABLE_LITERAL_CHAR }^${ this.#exponent } `;
  };

  get factor() {
    return this.#factor;
  };

  get exponent() {
    return this.#exponent;
  };

  get isConstant() {
    return this.#exponent === 0;
  }

  get isFactorNegative() {
    return this.#factor < 0;
  };

  evaluate(value) {
    return this.#factor * Math.pow(value, this.#exponent);
  };
}
