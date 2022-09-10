function train(list) {

  let nums = list.shift();
  let numList = nums.split(' ').map(Number);

  let maxCapacity = Number(list.shift());

  for (let i = 0; i < list.length; i++) {

    let lineAsString = list[i];
    let lineAsList = lineAsString.split(' ');
    let digit = 0;

    if (lineAsList.includes('Add')) {
      digit = Number(lineAsList[1]);
      numList.push(digit);
    }

    else {

      digit = Number(lineAsList[0]);

      for (let j = 0; j < numList.length; j++) {

        let element = numList[j];

        if (element + digit <= maxCapacity) {

          numList[j] += digit;
          break;

        }

      }

    }


  }

  console.log(numList.join(' '));

}

train
  (['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);

