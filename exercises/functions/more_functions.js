"use strict";
function displayMailingLabel(name, address, city, state, zip) {
  let addressLabel = ` ${name} 
 ${address}
 ${city} ${state}, ${zip}

`;
  console.log(addressLabel);
}

let fullName = "MyoMin Phai";
let homeAddress = "743 Elm St.";
let homeCity = "Pittsburgh";
let homeState = "PA";
let homeZip = "15225";
displayMailingLabel(fullName, homeAddress, homeCity, homeState, homeZip);

function addNumbers(num1, num2){
let result = num1 + num2;
console.log(result);
let output = `${num1} + ${num2} = ${result}`;

}
addNumbers(4, 2)