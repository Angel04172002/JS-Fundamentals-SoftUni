function triplesOfLatinLetters(number) {

  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let realNumber = Number(number);
  let stringOfLetters = '';
  let combination1 = '';
  let combination2 = '';
  let combination3 = '';
  let combination4 = '';
  let combination5 = '';
  let combination6 = '';


  for (let i = 0; i < realNumber; i++) {

    let letter = String.fromCharCode(97 + i);
    stringOfLetters += letter;


    for (let j = 0; j <= 2; j++) {

      if (j == 0) {
        combination1 = alphabet[0];  //a
      }

      else if (j == 1) {
        combination2 = alphabet[1];  //b
      }

      else if (j == 2) {
        combination3 = alphabet[2]  //c
      }


    }

    for (let g = 0; g <= 2; g++) {

      if (g == 0) {
        combination4 = alphabet[0];  //a
      }

      else if (g == 1) {
        combination5 = alphabet[1];  //b
      }

      else if (g == 2) {
        combination6 = alphabet[2]  //c
      }

      if (g == 2) {

        console.log(stringOfLetters + combination1 + combination4);
        console.log(stringOfLetters + combination1 + combination5);
        console.log(stringOfLetters + combination1 + combination6);
        console.log(stringOfLetters + combination2 + combination4);
        console.log(stringOfLetters + combination2 + combination5);
        console.log(stringOfLetters + combination2 + combination6);
        console.log(stringOfLetters + combination3 + combination4);
        console.log(stringOfLetters + combination3 + combination5);
        console.log(stringOfLetters + combination3 + combination6);
        stringOfLetters = '';
      }

    }

  }

}

triplesOfLatinLetters(10);