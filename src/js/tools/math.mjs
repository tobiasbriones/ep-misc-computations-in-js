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

const PLUS_SIGN_CHAR = '+';
const MINUS_SIGN_CHAR = '-';
const VARIABLE_LITERAL_CHAR = 'x';

export {
  PLUS_SIGN_CHAR,
  MINUS_SIGN_CHAR,
  VARIABLE_LITERAL_CHAR
}

export {
  isSign
}

function isSign(value) {
  return value === PLUS_SIGN_CHAR || value === MINUS_SIGN_CHAR;
}
