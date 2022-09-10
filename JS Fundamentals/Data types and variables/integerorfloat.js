function integerOrFloat(number1, number2, number3) {

  let sum = number1 + number2 + number3;

  let roundedSum = Math.round(sum);


  if (sum == roundedSum) {
    console.log(`${sum} - Integer`)

  }

  else {

    console.log(`${sum} - Float`);
  }


}