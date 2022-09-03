function rounding(number, precision) {


  if (precision > 15) {
    precision = 15;
  }

  let roundedNumber = number.toFixed(precision);

  let numberWithoutZeros = parseFloat(roundedNumber);


  console.log(numberWithoutZeros);


}

rounding(10.5, 3);