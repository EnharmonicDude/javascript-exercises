const convertToCelsius = function(degreeF) {
  let result = (degreeF - 32) * (5 / 9);
  return parseFloat(result.toFixed(1));//return the result to a fixed string with 1 decimal but then parse it into a Float so the test receives the correct type
};

const convertToFahrenheit = function(degreeC) {
  let result = (degreeC * (9 / 5)) + 32;
  return parseFloat(result.toFixed(1));
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit
};