function passwordValidator(password) {

  let isValid = true;
  let countDigits = 0;
  let check = false;

  //the length should be 6-10 characters
  if (password.length < 6 || password.length > 10) {

    console.log('Password must be between 6 and 10 characters')
    isValid = false;

  }

  //it should consist only of letters and digits
  for (let i = 0; i < password.length; i++) {

    let number = password.charCodeAt(i);

    if (number >= 48 && number <= 57 ||
      number >= 65 && number <= 90 ||
      number >= 97 && number <= 122) {

      //password must have at least 2 digits

      let string = String.fromCharCode(number);  //'1'
      let numberAsString = Number(string);

      if (Number.isFinite(numberAsString) == true) {


        countDigits++;

      }

    }

    else {

      if (!check) {
        console.log
          ('Password must consist only of letters and digits')
        isValid = false;
        check = true;

      }

    }


  }


  if (countDigits < 2) {


    console.log('Password must have at least 2 digits')
    isValid = false;


  }



  if (isValid) {

    console.log('Password is valid');

  }

}


passwordValidator('MyPass123')