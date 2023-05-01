function convertCtoF(celsiusTemperature){
let fahrenheitTemperature = (celsiusTemperature * (9/5) + 32);
return fahrenheitTemperature;

}
let currentTemp = 7;
let fahrenheitTemperature = convertCtoF(currentTemp);
console.log(fahrenheitTemperature);