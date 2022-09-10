function signCheck(a, b, c) {

  if (a > 0 && b > 0 || a < 0 && b < 0) {

    if (c > 0) {

      console.log('Positive');

    }

    else {
      console.log('Negative');

    }

  }


  else {

    if (c > 0) {

      console.log('Negative');

    }

    else {
      console.log('Positive');

    }


  }


}

signCheck();