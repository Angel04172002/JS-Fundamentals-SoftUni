function reverseNumArray(n, array) {

  let newArray = [];

  for (let i = n - 1; i >= 0; i--) {

    newArray.push(array[i]);

  }

  let string = '';

  for (let i = 0; i < newArray.length; i++) {

    string += newArray[i];

    if (i < newArray.length - 1) {
      string += ' ';
    }
  }

  console.log(string);

}

reverseNumArray(3, [10, 20, 30, 40]);