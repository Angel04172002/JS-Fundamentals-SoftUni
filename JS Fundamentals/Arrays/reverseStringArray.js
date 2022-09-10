function reverseStringArray(array) {

  let result = '';

  for (let i = array.length - 1; i >= 0; i--) {

    result += array[i];

    if (i != 0) {
      result += ' ';
    }

  }

  console.log(result);


}

reverseStringArray(['a', 'b', 'c', 'd', 'e']);