function mergeArrays(array1, array2) {

  let sum = 0;
  let concatenation = 0;
  let newArray = [];

  //check if the index is odd or prime

  for (let i = 0; i < array1.length; i++) {

    if (i % 2 == 0) {

      //calculate sum
      sum = Number(array1[i]) + Number(array2[i]);
      newArray[i] = sum;

    }

    else {
      //calculate concatenation
      concatenation = array1[i] + array2[i];
      newArray[i] = concatenation;
    }

  }

  console.log(newArray.join(' -'));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);