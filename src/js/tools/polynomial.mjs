/*
 * Copyright (c) 2019-2020 Tobias Briones. All rights reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * This file is part of Example Project: Miscellaneous computations in JS.
 *
 * This source code is licensed under the MIT License found in the
 * LICENSE file in the root directory of this source tree or at
 * https://opensource.org/licenses/MIT.
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
