function maxNumber(array) {

  let topIntArray = [];

  //go through all elements of array
  for (let i = 0; i < array.length; i++) {

    let element = array[i];

    if (element == array[i - 1]) {
      continue;
    }

    if (i == array.length - 1) {
      topIntArray.push(element);
      break;
    }


    for (let j = i + 1; j < array.length; j++) {

      let tempElement = array[j];

      if (element < tempElement) {
        break;
      }

      if (j == array.length - 1) {
        topIntArray.push(element);
      }

    }

  }

  console.log(topIntArray.join(' '))

}

maxNumber([41, 41, 34, 20]);