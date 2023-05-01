function convertFtoC(fahrenheitTemperature) {
  celsiusTemperature = (fahrenheitTemperature - 32) * (5 / 9);
  return celsiusTemperature;
}

let currentTemp = 15;
let celsiusTemp = convertFtoC(currentTemp);
console.log(celsiusTemp.toFixed(2));
