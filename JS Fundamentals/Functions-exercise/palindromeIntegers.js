function palindromeIntegers(array) {



  for (let i = 0; i < array.length; i++) {

    let reservedNumberAsString = '';
    let number = array[i];   //123
    let numberAsString = number.toString();  //'123'

    for (let i = numberAsString.length - 1; i >= 0; i--) {

      reservedNumberAsString += numberAsString[i];  //'321'

    }


    if (number == Number(reservedNumberAsString)) {

      console.log(true);

    }

    else {
      console.log(false);
    }


  }


}

palindromeIntegers([123, 323, 421, 121]);