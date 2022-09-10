function arrayManipulations(array) {

  let firstElement = array.shift();
  let numsArray = firstElement.split(' ');
  let nums = numsArray.map(Number);

  for (let i = 0; i < array.length; i++) {

    let line = array[i].split(' ');
    let command = line[0];
    let digit = Number(line[1]);

    if (command == 'Add') {

      nums.push(digit);

    }

    else if (command == 'Remove') {

      let indexOfDeletion = nums.indexOf(digit);
      nums.splice(indexOfDeletion, 1);

    }

    else if (command == 'RemoveAt') {

      nums.splice(digit, 1);

    }

    else if (command == 'Insert') {

      let index = Number(line[2]);
      nums.splice(index, 0, digit);

    }


  }

  console.log(nums.join(' '));

}

arrayManipulations(['4 19 2 53 6 43',
  'Add 3',
  'Remove 2',
  'RemoveAt 1',
  'Insert 8 3']);
