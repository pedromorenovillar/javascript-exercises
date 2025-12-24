const isObject = (value) => typeof value === 'object' && value !== null;

const totalIntegers = function (obj) {
  let count = 0
  if (!isObject(obj)) {
    return
  }

  const elements = Object.values(obj)

  for (const el of elements) {
    if (Number.isInteger(el)) {
      count++
    } else if (isObject(el)) {
      count += totalIntegers(el)
    }
  }
  return count
  if (
    Array.isArray(arrayOrObject) ||
    (typeof arrayOrObject === "object" &&
      arrayOrObject !== null &&
      !Array.isArray(arrayOrObject))
  ) {
    const values = Object.values(arrayOrObject);
    if (values.length === 1) {
      if (Number.isInteger(values[0])) {
        totalIntegers++
      } else {
        totalIntegers(values)
      }
    }
  } else {
    return;
  }
  return totalIntegers
};

// Do not edit below this line
module.exports = totalIntegers;
