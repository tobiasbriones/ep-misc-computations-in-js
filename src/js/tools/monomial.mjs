/*
 * Copyright (c) 2020 Tobias Briones.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { VARIABLE_LITERAL_CHAR } from './math.mjs';

export default class {
  #factor;
  #exponent;

  constructor(factor = 0, exponent = 0) {
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

  isFactorNegative() {
    return this.#factor < 0;
  };

  evaluate(value) {
    return this.#factor * Math.pow(value, this.#exponent);
  };
};
