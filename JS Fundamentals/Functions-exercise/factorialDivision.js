function factorialDivision(num1, num2) {


  let factorialResultNum1 = 1;
  let factorialResultNum2 = 1;


  for (let i = num1; i >= 2; i--) {

    factorialResultNum1 *= i;

  }


  for (let i = num2; i >= 2; i--) {

    factorialResultNum2 *= i;

  }

  let division = factorialResultNum1 / factorialResultNum2;
  let result = division.toFixed(2);

  return result;

}


factorialDivision(5, 2);