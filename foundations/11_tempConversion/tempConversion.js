const convertToCelsius = function(input) {
  let output = 0.0;
  output = input - 32;
  output = output / 9 * 5;
  output = (Math.round(output*10)/10);
  return output;
};

const convertToFahrenheit = function(input) {
  let output = 0.0;
  output = input * 9 / 5;
  output = output + 32;
  output = (Math.round(output*10)/10);
  return output;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
