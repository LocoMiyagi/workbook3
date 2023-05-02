function getSocSecTax() {
  let sscTax = 0.062;
  let finalPay = grossPay * 0.062;
  return finalPay;
}
let grossPay = 5000;
let finalPay = getSocSecTax(grossPay);
console.log("Social Security Tax will be: $" + finalPay.toFixed(2));

function getMedicareTax() {
  let medTax = 0.0145;
  let finalTax = grossPay + 0.0145;
  return finalTax;
}

let grossPay = 5000
