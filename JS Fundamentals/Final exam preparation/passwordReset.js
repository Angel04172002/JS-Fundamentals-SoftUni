function passwordReset(list) {

  let string = list.shift();

  for (let i = 0; i < list.length; i++) {

    let command = list[i];

    if (command.includes('TakeOdd')) {

      let splittedString = string.split('');
      let oddCharacters = splittedString.filter((x, i) => i % 2 == 1);
      string = oddCharacters.join('');
      console.log(string);

    }


    else if (command.includes('Cut')) {

      let tokens = command.split(' ');
      let index = Number(tokens[1]);
      let length = Number(tokens[2]);
      let substringToRemove = string.substring(index, index + length);
      string = string.replace(substringToRemove, '');
      console.log(string);

    }



    else if (command.includes('Substitute')) {

      let tokens = command.split(' ');
      let substring = tokens[1];
      let substitute = tokens[2];
      let result = string.split(substring).join(substitute);

      if (result == string) {

        console.log('Nothing to replace!')

      }

      else {


        console.log(result);
        string = result;

      }

    }



    else {


      console.log(`Your password is: ${string}`);
      return;


    }



  }

}

passwordReset
  (['up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done']);