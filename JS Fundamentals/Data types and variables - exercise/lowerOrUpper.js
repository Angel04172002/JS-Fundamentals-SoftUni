function lowerOrUpper(char) {

  let isCapitalLetter = false;

  for (let i = 0; i <= 25; i++) {


    let letter = String.fromCharCode(65 + i);
    //all capital letters

    if (char == letter) {
      isCapitalLetter = true;
      break;
    }


  }

  if (isCapitalLetter == true) {
    console.log('upper-case');
  }

  else {
    console.log('lower-case');
  }

}

lowerOrUpper('A');
lowerOrUpper('b');

