function rightPlace(string1, char, string2) {

  let newString = "";

  for (let i = 0; i <= string1.length - 1; i++) {

    if (string1[i] == "_") {


      newString += char;

    }

    else {

      newString += string1[i];

    }
  }


  if (newString == string2) {
    console.log("Matched");

  }

  else {

    console.log("Not Matched");
  }


}

rightPlace('Str_ng', 'i', 'String');