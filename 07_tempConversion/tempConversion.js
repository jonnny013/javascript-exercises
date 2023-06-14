const convertToCelsius = function(temp) {
let temperature = (temp - 32)* 5/9;
return Math.round(temperature * 10) / 10;

};

const convertToFahrenheit = function(temp) {
let temperature = (temp * 9/5) + 32;
return Math.round(temperature * 10) / 10;
};
console.log(convertToCelsius(32));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
