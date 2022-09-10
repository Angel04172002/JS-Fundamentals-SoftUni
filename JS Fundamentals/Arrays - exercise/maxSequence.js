function maxSequence(array) {

  let storeArray = [];
  let tempArray = [];


  for (let i = 0; i < array.length; i++) {


    while (array[i] == array[i + 1]) {


      tempArray.push(array[i]);


      if (array[i + 1] != array[i + 2]) {

        tempArray.push(array[i + 1]);

      }

      i++;

    }


    if (tempArray.length > storeArray.length) {

      storeArray = tempArray;

    }

    tempArray = [];

  }

  console.log(storeArray.join(' '));


}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);