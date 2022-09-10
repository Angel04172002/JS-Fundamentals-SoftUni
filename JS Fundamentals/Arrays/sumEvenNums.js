function sumEvenNums(array) {

  let numArray = [];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {

    numArray.push(Number(array[i]));

  }

  for (let parseString of numArray) {

    if (parseString % 2 == 0 && parseString != 0) {

      sum += parseString;

    }

  }

  console.log(sum);

}

sumEvenNums(['1', '2', '3']);