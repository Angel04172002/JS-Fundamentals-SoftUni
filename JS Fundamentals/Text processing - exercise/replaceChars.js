function replaceChars(string) {

  let result = string[0];

  for (let i = 1; i < string.length; i++) {

    if (string[i] != string[i - 1]) {

      result += string[i];

    }

  }


  console.log(result);


}


replaceChars('qqqwerqwecccwd');