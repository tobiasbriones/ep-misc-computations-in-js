/*
 * Copyright (c) 2020 Tobias Briones.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { VARIABLE_LITERAL_CHAR } from './math.mjs';

export class Monomial {
  #factor;
  #exponent;

  constructor(factor = 0, exponent = 0) {
    if (exponent < 0) {
      const msg = `The exponent is a non-negative integer: ${exponent}`;
      throw new Error(msg);
    }
    this.#factor = factor;
    this.#exponent = exponent;
  }

  toString() {
    return ` ${ this.#factor }${ VARIABLE_LITERAL_CHAR }^${ this.#exponent } `;
  };

  getFactor() {
    return this.#factor;
  };

  getExponent() {
    return this.#exponent;
  };

  isConstant() {
    return this.#exponent === 0;
  }

  isFactorNegative() {
    return this.#factor < 0;
  };

  evaluate(value) {
    return this.#factor * Math.pow(value, this.#exponent);
  };
}
