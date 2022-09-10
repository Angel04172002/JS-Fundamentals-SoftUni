function negativePositiveNums(array) {

  let newArray = [];

  for (let i = 0; i < array.length; i++) {

    if (array[i] >= 0) {
      newArray.push(array[i]);
    }

    else {

      newArray.unshift(array[i]);

    }

    if (i == array.length - 1) {

      print();

    }

  }

  function print() {

    for (let element of newArray) {

      console.log(element);


    }

  }

}

negativePositiveNums([7, -2, 8, 9]);