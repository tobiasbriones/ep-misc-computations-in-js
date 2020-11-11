/*
 * Copyright (c) 2020 Tobias Briones.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
