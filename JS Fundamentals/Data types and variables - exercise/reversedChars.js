function reversedChars(firstChar, secondChar, thirdChar) {

  let stringOfChars = firstChar + secondChar + thirdChar;
  let emptyString = '';

  for (let i = stringOfChars.length - 1; i >= 0; i--) {

    emptyString += ' ' + stringOfChars[i];

  }

  console.log(emptyString);

}

reversedChars('A', 'B', 'C');