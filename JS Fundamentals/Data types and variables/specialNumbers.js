function specialNumbers(number) {


  let sum = 0
  let isSpecial = false;


  for (let i = 1; i <= number; i++) {

    let currentNumber = i;
    let currentNumberAsString = currentNumber.toString();

    for (let j = 0; j < currentNumberAsString.length; j++) {

      sum += Number(currentNumberAsString[j]);

    }

    if (sum == 5 || sum == 7 || sum == 11) {
      isSpecial = true;
    }


    if (isSpecial == true) {
      console.log(`${currentNumber} -> True`);
    }

    else {
      console.log(`${currentNumber} -> False`);
    }

    sum = 0;
    isSpecial = false;

  }

}

specialNumbers(14);