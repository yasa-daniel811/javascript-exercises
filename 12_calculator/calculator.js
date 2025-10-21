const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(intArray) {
	return intArray.reduce((sum, int) => sum + int, 0);
};

const multiply = function(intArray) {
  return intArray.reduce((product, int) => product * int);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if (a === 0 || a === 1) {
    return 1;
  }
  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
