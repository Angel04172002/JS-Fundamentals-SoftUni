function evenOddSubstraction(array) {

  //even sum
  //odd sum
  //difference

  let evenSum = 0;
  let oddSum = 0;
  let substraction = 0;


  for (let number of array) {

    if (number % 2 == 0) {

      evenSum += number;


    }

    else {
      oddSum += number;
    }


  }

  substraction = evenSum - oddSum;
  console.log(substraction);

}

evenOddSubstraction([1, 2, 3, 4, 5, 6]);