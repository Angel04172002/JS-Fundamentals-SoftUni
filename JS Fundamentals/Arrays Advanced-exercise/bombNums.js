function bombNums(sequence, bomb) {

  let sumSequence = [];
  let bombNumber = bomb.shift();
  let power = bomb.shift();
  let sum = 0;

  for (let i = 0; i < sequence.length; i++) {

    let currentElement = sequence[i];
    let checkIndex = i + power;

    if (sequence[checkIndex] == bombNumber) {

      i = checkIndex + power;

    }

    else {

      sumSequence.push(currentElement);

    }

  }


  for (let digit of sumSequence) {

    sum += digit;

  }

  console.log(sum);

}

bombNums([1, 2, 2, 1], [2, 0]);