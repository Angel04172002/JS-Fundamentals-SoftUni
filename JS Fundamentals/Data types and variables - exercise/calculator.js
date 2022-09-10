function calculator(numOne, operator, numTwo) {

  let addition = numOne + numTwo;
  let substraction = numOne - numTwo;
  let multiplication = numOne * numTwo;
  let division = numOne / numTwo;

  if (operator == '+') {
    console.log(addition.toFixed(2));
  }


  else if (operator == '-') {
    console.log(substraction.toFixed(2));
  }

  else if (operator == '*') {
    console.log(multiplication.toFixed(2));
  }

  else {
    console.log(division.toFixed(2))
  }


}

calculator();
