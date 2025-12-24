const reverseString = function(string) {
  let newString = ""
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i]
  }
  // Other solution
  console.log(string.split("").reverse().join(""))
  return newString
};

// Do not edit below this line
module.exports = reverseString;
