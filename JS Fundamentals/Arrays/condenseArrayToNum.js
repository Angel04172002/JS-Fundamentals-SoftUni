function condenseArrayToNum(array) {


  let sum = 0;
  let storageArray = [];

  for (let i = 0; i < array.length - 1; i++) {

    // if (isRotated == true) {
    //   i = 0;
    //   isRotated = false;
    // }

    sum = array[i] + array[i + 1];
    storageArray.push(sum);

    if (i == array.length - 2) {

      array = storageArray;
      storageArray = [];
      i = -1;

    }


  }

  if (array.length >= 2) {

    console.log(array[0] + array[1]);

  }

  else {

    console.log(array[0]);

  }

}
condenseArrayToNum([1]);
