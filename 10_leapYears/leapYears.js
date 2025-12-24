const leapYears = function (year) {
  // A year is a leap year if it is divisible by 4, except for years that
  // are divisible by 100, unless they are also divisible by 400.
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return true
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
