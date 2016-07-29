'use strict';

function num2code(num) {
  num = num === 0 ? 11 : num;
  let times = 0;
  let result = "";
  [7, 4, 2, 1, 0].forEach(w => {
    if(num >= w && times <2) {
      num -= w;
      times ++;
      result += '|';
    } else {
      result += ':';
    }
  });
  return result;
}

function wrapCD(postCode) {
  let sum = postCode.split('')
      .map(v=> parseInt(v))
      .reduce((a, b)=> a + b);

  let cd = sum % 10 === 0 ? 0 : 10 - (sum % 10);

  return '' + postCode + cd;
}

function wrapFrame(barcode) {
  return '|' + barcode + '|';
}

function convert2barcode(postcode) {
  let wrapdPostCode = wrapCD(postcode);
  let coreBarcode = wrapdPostCode.split('').map(v=> parseInt(v)).map(num2code).join('');
  let result = wrapFrame(coreBarcode);
  return result;
}

module.exports = {
  convert2barcode: convert2barcode
};