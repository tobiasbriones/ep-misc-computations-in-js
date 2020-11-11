/*
 * Copyright (c) 2019-2020 Tobias Briones.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Monomial from './monomial.mjs';

export default class {
  #monomials;

  constructor() {
    this.#monomials = [];
  }

  toString() {
    let str = '';

    this.#monomials.forEach(monomial => {
      str += monomial.toString();
    });
    return str;
  };

  addMonomial(monomial) {
    this.#monomials.push(monomial);
  };

  evaluate(value) {
    const initialValue = new Monomial();
    const reducedMonomial = this.#monomials.reduce(
      (prevMon, curMon) => new Monomial(prevMon.evaluate(value) + curMon.evaluate(value)),
      initialValue
    );
    return reducedMonomial.evaluate(value);
  };
};
