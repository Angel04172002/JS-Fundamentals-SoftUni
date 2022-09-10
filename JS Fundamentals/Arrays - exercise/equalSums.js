function equalSums(array) {

  let rightSum = 0;
  let leftSum = 0;
  let isEqualSum = false;

  //go through all elements of array
  for (let i = 0; i < array.length; i++) {


    //left sum
    for (let k = i - 1; k >= 0; k--) {


      leftSum += array[k];

    }


    //right sum
    for (let j = i + 1; j < array.length; j++) {

      rightSum += array[j];

    }


    if (leftSum == rightSum) {

      console.log(i);
      isEqualSum = true;

    }

    if (i == array.length - 1 && !isEqualSum) {
      console.log('no');
      break;
    }

    leftSum = 0;
    rightSum = 0;

  }


  //check if there is an element so that left sum == right sum

}

equalSums([1]);