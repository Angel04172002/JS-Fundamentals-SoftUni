function houseParty(array) {

  let nameArray = [];

  for (let i = 0; i < array.length; i++) {

    let command = array[i].split(' ');
    let name = command[0];


    if (!command.includes('not')) {


      if (!nameArray.includes(name)) {

        nameArray.push(name);
        //['Allie', 'George']

      }

      else {

        console.log(`${name} is already in the list!`)


      }

    }


    else {

      if (nameArray.includes(name)) {

        let indexOfDeletion = nameArray.indexOf(name);
        nameArray.splice(indexOfDeletion, 1);

      }

      else {

        console.log(`${name} is not in the list!`)

      }


    }


  }

  console.log(nameArray.join('\n'));

}

houseParty([
  'Allie is going!',
  'George is going!',
  'John is not going!',
  'George is not going!'

]);