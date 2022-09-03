function login(list) {


  let username = list.shift();
  let passwordAsList = username.split('');
  let passwordReversed = passwordAsList.reverse();

  let password = passwordReversed.join('');

  let counter = 1;

  while (true) {

    let enteredPassword = list.shift();


    if (counter === 4) {

      console.log(`User ${username} blocked!`);
      break;
    }


    if (enteredPassword === password) {
      console.log(`User ${username} logged in.`)
      break;
    }

    else {

      console.log('Incorrect password. Try again.')

    }



    counter++;

  }

}

login(['Acer', 'login', 'go', 'let me in', 'recA']);

