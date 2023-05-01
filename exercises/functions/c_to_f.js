function convertCtoF(celsiusTemperature){
const fahrenheitTemperature = (celsiusTemperature * (9/5) + 32);
return fahrenheitTemperature;

}
const currentTemp = 7;
const fahrenheitTemperature = convertCtoF(currentTemp);
console.log(fahrenheitTemperature.toFixed(2));