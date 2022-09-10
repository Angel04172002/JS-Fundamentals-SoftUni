function oddEvenSum(number) {

  let numAsString = number.toString();
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < numAsString.length; i++) {

    let digit = Number(numAsString[i]);

    if (digit % 2 == 0) {

      evenSum += digit;

    }

    else {

      oddSum += digit;

    }

  }


  let string = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

  return string;


}

console.log(oddEvenSum());