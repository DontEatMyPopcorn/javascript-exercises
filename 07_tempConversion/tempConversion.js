const convertToCelsius = function(temp) {
  let deg;
  deg = (temp -32) * (5/9);
  deg = Math.round (deg*10) / 10;
  return deg;
};

const convertToFahrenheit = function(temp) {
  let deg;
  deg = temp * 9 / 5 + 32;
  deg = Math.round (deg*10) / 10;
  return deg;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
