/*
 * Copyright (c) 2019 Tobias Briones.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

console.log('');
console.log('%cBisection method script', 'font-weight:bold;font-size:24px');

// Set the polynomial
const f = new Polynomial();

// f(x) = x^6 - 3x - 1
f.addTerm("x", 6);
f.addSign("-");
f.addTerm("3x");
f.addSign("-");
f.addTerm("1");

// Run the algorithm and print the result!
console.log('Running bisection method for %cf(x) = x^6 - 3x - 1 in [-1, 0] and default iterations (50)',
            'font-weight:bold');
console.log(bisect(f, [-1, 0]));
console.log('');
console.log('Running bisection method for %cf(x) = x^6 - 3x - 1 in [1, 2] and 8 iterations',
            'font-weight:bold');
console.log(bisect(f, [1, 2], 8));

console.log('');
console.log('');

// Algorithm of bisection
function bisect(polynomial, interval, i = 50) {
    var a = parseInt(interval[0]);
    var b = parseInt(interval[1]);
    var c = 0;
    var error = 0;

    do {
        c = (a + b) / 2;
        var fa = polynomial.eval(a);
        var fb = polynomial.eval(b);
        var fc = polynomial.eval(c);
        error = (Math.abs(a - b) / 2);
        
        if(fc == 0) {
            break;
        }
        if(hasOpositeSigns(fa, fc)) {
            b = c;
        }
        else if(hasOpositeSigns(fc, fb)) {
            a = c;
        }
        else {
            return `There aren't roots in the interval or try to give an interval
                    in which only the root that you are looking for of the polynomial is enclosed in it
                    and with a change of signs!`;
        }
        i--;
    } while(i != 0);
    return `Root found at c = ${c}, F(c) = ${polynomial.eval(c)}, |a - b| / 2 = ${error}`;
}

function hasOpositeSigns(a, b) {
    return ((a < 0 && b >= 0) || (a >= 0 && b < 0));
}

function isRoot(polynomial, x) {
    return polynomial.eval(x) == 0;
}

// Polynomial class
function Polynomial() {

    this.terms = Array();

    this.addSign = function(sign) {
        var last = this.terms[(this.terms.length - 1)];

        if(isSign(last)) {
            var boolSign = last === "+";
            var boolInSign = sign === "+";
            var newBoolSign = boolSign & boolInSign;
            var newSign = (newBoolSign) ? "+" : "-";

            this.terms.pop();
            this.terms.push(newSign);
        }
        else {
            this.terms.push(sign);
        }
    }

    this.addTerm = function(value, exponent = 1) {
        if(value[value.length - 1] === "x") {
            var factor = value.substr(0, value.length - 1);

            if(factor.length === 0) {
                factor = 1;
            }
            this.terms.push([value, parseFloat(factor), exponent]);
        }
        else {
            this.terms.push(value);
        }
    }

    this.eval = function(value) {
        var operation = "+";
        var result = 0;

        this.terms.forEach(item => {
            if(isSign(item)) {
                operation = item;
            }
            else if(item.length === 3) {
                var factor = item[1];
                var exponent = item[2];

                if(operation[0] === "+") {
                    result += factor * Math.pow(value, exponent);
                }
                else {
                    result -= factor * Math.pow(value, exponent);
                }
                operation = "+";
            }
            else {
                if(operation[0] === "+") {
                    result += parseFloat(item);
                }
                else {
                    result -= parseFloat(item);
                }
                operation = "+";
            }
        });
        return result;
    }

    function isSign(value) {
        return value[0] === "+" || value[0] === "-";
    }

}
