const factorial = function(n) {
  // If n is not a number not needed (isNaN(n)), or n is less than 0 or n is not a number
  if (n < 0 || !Number.isInteger(n)) {
    return
  } else if (n === 1 || n === 0) {
    return 1
  }
  return n * factorial(n - 1)
};

// Do not edit below this line
module.exports = factorial;