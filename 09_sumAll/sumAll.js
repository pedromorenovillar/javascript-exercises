const sumAll = function(num1, num2) {
  // Check for type and negative 
  if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) ||!Number.isInteger(num2)) {
    return 'ERROR'
  }
  // Reverse order if num2 is bigger
  if (num2 < num1) {
    let num = num1
    num1 = num2
    num2 = num
  }
  // Create empty array
  const start = num1
  const end = num2
  newArray = Array.from({ length: end - start + 1 }, (v, i) => start + i);
  console.log({num1});
  console.log({num2});
  // console.log({newArray});
  const result = newArray.reduce((totalSum, number) => {
    return number + totalSum
  }, 0)
  console.log({result});
  return result
};

// Do not edit below this line
module.exports = sumAll;
