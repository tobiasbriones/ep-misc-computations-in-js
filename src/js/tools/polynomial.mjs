/*
 * Copyright (c) 2019-2020 Tobias Briones.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const PLUS_SIGN = '+';
const MINUS_SIGN = '-';
const items = Array();

export default function() {
  return {
    addSign,
    addTerm,
    evaluate
  };
}

// ---------------------------  PUBLIC FUNCTIONS  --------------------------- //

function addSign(sign) {
  if (isLastItemSign()) {
    addSignGivenLastItemIsSign(sign);
  }
  else {
    items.push(sign);
  }
}

function addTerm(value, exponent = 1) {
  if (value[value.length - 1] === 'x') {
    let factor = value.substr(0, value.length - 1);

    if (factor.length === 0) {
      factor = 1;
    }
    items.push([value, parseFloat(factor), exponent]);
  }
  else {
    items.push(value);
  }
}

function evaluate(value) {
  let result = 0;
  let operation = '+';

  items.forEach(item => {
    if (isSign(item)) {
      operation = item;
    }
    else if (item.length === 3) {
      let factor = item[1];
      let exponent = item[2];

      if (operation[0] === '+') {
        result += factor * Math.pow(value, exponent);
      }
      else {
        result -= factor * Math.pow(value, exponent);
      }
      operation = '+';
    }
    else {
      if (operation[0] === '+') {
        result += parseFloat(item);
      }
      else {
        result -= parseFloat(item);
      }
      operation = '+';
    }
  });
  return result;
}

// --------------------------  PRIVATE FUNCTIONS  --------------------------- //

function lastItem() {
  return items[items.length - 1];
}

function isSign(value) {
  return value[0] === '+' || value[0] === '-';
}

function isLastItemSign() {
  return isSign(lastItem());
}

function newSignFrom(signA, signB) {
  const areBothPlus = (signA, signB) => {
    return signA === PLUS_SIGN && signB === PLUS_SIGN;
  };
  const areBothMinus = (signA, signB) => {
    return signA === MINUS_SIGN && signB === MINUS_SIGN;
  };
  const isPlus = areBothPlus(signA, signB) || areBothMinus(signA, signB);
  return isPlus ? PLUS_SIGN : MINUS_SIGN;
}

function addSignGivenLastItemIsSign(sign) {
  const lastItem = lastItem();
  const newSign = newSignFrom(lastItem, sign);

  items.pop();
  items.push(newSign);
}
