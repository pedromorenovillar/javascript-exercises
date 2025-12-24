/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!

const firstName = "Carlos";
const lastName = "Stevenson"
const fullName = firstName + " " + lastName
const thisYear = 1965
const birthYear = 1947
const age = thisYear - birthYear
const greeting = `Hello! My name is ${fullName} and I am ${age} years old.`

function capitalize(string) {
  let capitalFirstLetter = string.charAt(0).toUpperCase();
  let lowerCaseString = string.toLowerCase();
  let newString = lowerCaseString.replace(lowerCaseString.charAt(0), capitalFirstLetter)
  return newString
}
console.log(capitalize("abcd"))
console.log(capitalize("ABCD"))
console.log(capitalize("aBcD"))

function lastLetter(string) {
  return `the last letter of the string is ${string.at(-1)}`
}

console.log(lastLetter("abcd"))


// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
