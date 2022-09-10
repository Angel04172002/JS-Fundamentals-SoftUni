function solve(array) {

  let email = array.shift();
  let symbolCharcodes = [];

  while (array[0] != 'Complete') {

    let tokens = array.shift();

    if (tokens.includes('Make Upper')) {

      email = email.toUpperCase();
      console.log(email);

    }


    else if (tokens.includes('Make Lower')) {

      email = email.toLowerCase();
      console.log(email);

    }


    else if (tokens.includes('GetDomain')) {

      let [_, count] = tokens.split(' ');
      let lastCharacters = email.substring(email.length - 3);
      console.log(lastCharacters);


    }


    else if (tokens.includes('GetUsername')) {

      if (email.includes('@')) {

        let index = email.indexOf('@');
        let substring = email.substring(0, index);
        console.log(substring);

      }


      else {

        console.log(`The email ${email} doesn't contain the @ symbol.`)

      }

    }


    else if (tokens.includes('Replace')) {


      let [_, char] = tokens.split(' ');
      let pattern = new RegExp(char, 'g');
      email = email.replace(pattern, '-');
      console.log(email);


    }


    else if (tokens.includes('Encrypt')) {


      for (let symbol of email) {

        let symbolCharcode = symbol.charCodeAt(0);
        symbolCharcodes.push(symbolCharcode);

      }

      console.log(symbolCharcodes.join(' '));
      symbolCharcodes = [];

    }

  }
}

solve(['AnotherMail.com',
  'Make Lower',
  'GetUsername',
  'Replace a',
  'Complete'])
