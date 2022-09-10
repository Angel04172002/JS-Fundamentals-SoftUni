function equalArrays(arr1, arr2) {

  let isEqual = false;
  let sum = 0;
  let index = 0;

  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] === arr2[i]) {
      isEqual = true;
      sum += Number(arr1[i]);

      if (i != 0) {
        index++;

      }
    }

    else {
      isEqual = false;

      if (i > 0) {
        index++;
      }

      break;

    }

  }

  if (isEqual == true) {
    console.log(`Arrays are identical. Sum: ${sum}`)
  }

  else {
    console.log(`Arrays are not identical. Found difference at ${index} index`)
  }

}



equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);