function chessboard(n) {


  let emptyString = ' ';
  let doubleEmptyString = '  ';
  console.log('<div class="chessboard">');



  for (let i = 1; i <= n; i++) {


    if (i % 2 == 0) {


      for (let j = 1; j <= n; j++) {

        if (j == 1) {
          console.log(emptyString + '<div>');
        }



        if (j % 2 == 0) {

          console.log(doubleEmptyString + '<span class="black"></span>')
        }

        else {
          console.log(doubleEmptyString + '<span class="white"></span>')
        }


        if (j == n) {
          console.log(emptyString + '</div>');

        }

      }


    }

    else {

      for (let k = 1; k <= n; k++) {

        if (k == 1) {
          console.log(emptyString + '<div>');
        }



        if (k % 2 == 0) {
          console.log(doubleEmptyString + '<span class="white"></span>')
        }


        else {
          console.log(doubleEmptyString + '<span class="black"></span>')
        }



        if (k == n) {
          console.log(emptyString + '</div>');

        }
      }

    }


  }



  console.log('</div>');

}

chessboard();