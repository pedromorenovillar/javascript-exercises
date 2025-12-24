const convertToCelsius = function(temp) {
  // °C = (°F - 32) ÷ 1.8
  celsius = (temp - 32) / 1.8
  roundedCelsius = Math.round(celsius * 10) / 10
  console.log({roundedCelsius});
  return roundedCelsius
};

const convertToFahrenheit = function(temp) {
  // °F = (°C × 9/5) + 32
  fahrenheit = (temp * 9/5) + 32
  roundedFahrenheit = Math.round(fahrenheit * 10) / 10
  console.log({roundedFahrenheit});
  return roundedFahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
