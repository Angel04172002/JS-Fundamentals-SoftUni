function addAndSubtract(array) {

  let sumArray = 0;
  let modifiedSumArray = 0;

  for (let i = 0; i < array.length; i++) {

    sumArray += array[i];

    if (array[i] % 2 == 0) {

      array[i] += i;
      modifiedSumArray += array[i];

    }

    else {

      array[i] -= i;
      modifiedSumArray += array[i];

    }


  }

  console.log(array);
  console.log(sumArray);
  console.log(modifiedSumArray);



}

addAndSubtract([5, 15, 23, 56, 35]);
