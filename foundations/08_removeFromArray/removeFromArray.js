const removeFromArray = function(array, ...args) {
  const newArray = []
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item)
    }
  });
  console.log({array});
  console.log({newArray}); 
  return newArray
  // Another solution
  return array.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
