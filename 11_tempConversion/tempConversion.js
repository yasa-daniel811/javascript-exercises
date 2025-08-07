const convertToCelsius = function(fahrenheit) {
  answer = (fahrenheit - 32) / (9/5);
  return (Math.round(answer * 10) / 10);
};

const convertToFahrenheit = function(celsius) {
  answer = (celsius * (9/5)) + 32;
  return (Math.round(answer * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
