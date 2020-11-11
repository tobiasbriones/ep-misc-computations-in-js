/*
 * Copyright (c) 2019-2020 Tobias Briones.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Monomial } from './monomial.mjs';

export class Polynomial {
  #monomials;
  #isConstant;

  constructor() {
    this.#monomials = [];
    this.#isConstant = true;
  }

  toString() {
    let str = '';

    this.#monomials.forEach(monomial => {
      str += monomial.toString();
    });
    return str;
  };

  isConstant() {
    return this.#isConstant;
  }

  addMonomial(monomial) {
    this.#monomials.push(monomial);

    if (!monomial.isConstant()) {
      this.#isConstant = false;
    }
  };

  evaluate(value) {
    const initialValue = new Monomial();
    const reducedMonomial = this.#monomials.reduce(
      (prevMon, curMon) => new Monomial(prevMon.evaluate(value) + curMon.evaluate(value)),
      initialValue
    );
    return reducedMonomial.evaluate(value);
  };
}
