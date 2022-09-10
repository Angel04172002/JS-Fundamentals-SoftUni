function loadingBar(number) {

  let loadingBar =
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];

  let numberAsString = number.toString();
  let firstDigit = numberAsString[0];
  let firstDigitAsNumber = Number(firstDigit);
  let newString = '';

  if (number == 100) {
    firstDigitAsNumber = 10;
  }

  for (let i = 0; i < firstDigitAsNumber; i++) {


    loadingBar[i] = '%';

  }


  if (number <= 90) {


    newString =
      `${number}% [${loadingBar.join('')}]\nStill loading...`;

  }

  else {

    newString =
      `${number}% Complete!\n[${loadingBar.join('')}]`



  }

  return newString;

}

console.log(loadingBar(100));