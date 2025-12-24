const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => {
    return total + current
  }, 0)
};

const multiply = function(array) {
  return array.reduce((total, number) => {
    return total * number
  }, 1)
};

const power = function(base, exponent) {
  const newArray = Array(exponent).fill(base)
  return newArray.reduce((total, number) => {
    return total * number
  }, 1)
};

const factorial = function(number) {
	const newArray = []
  for (let i = 0; i < number; i++) {
    newArray.push(number - i)
  }
  return newArray.reduce((total, number) => {
    return total * number
  }, 1)
  
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
