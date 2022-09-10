function magicSum(array, number) {

  let sum = 0;
  let storeArray = [];
  let check = [];
  let isRepeated = false;


  for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array.length; j++) {


      sum = array[i] + array[j];



      if (sum == number) {

        storeArray.push(array[i], array[j]);


        for (let k = 0; k < check.length; k++) {

          if (check[k] == array[i] &&
            check[k + 1] == array[j]) {

            isRepeated = true;
            break;

          }

        }


        if (!isRepeated && array[i] != array[j]) {

          console.log(storeArray.join(' '));

        }


      }

      check.push(array[i], array[j]);
      storeArray = [];

      sum = 0;
      isRepeated = false;


    }


  }


}

magicSum([1, 2, 3, 4, 5, 6], 6);