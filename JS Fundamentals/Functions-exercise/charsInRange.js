function chars(char1, char2) {


  let num1 = char1.charCodeAt(0);
  let num2 = char2.charCodeAt(0);
  let array = [];

  if (num1 < num2) {

    for (let i = num1 + 1; i < num2; i++) {

      array.push(String.fromCharCode(i));


    }

  }


  else {

    for (let i = num2 + 1; i < num1; i++) {

      array.push(String.fromCharCode(i));


    }

  }

  console.log(array.join(' '));



}


chars('C', '#');