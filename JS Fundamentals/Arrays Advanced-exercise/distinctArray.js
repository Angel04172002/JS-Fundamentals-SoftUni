function distinctArray(array) {


  let newArray = [];

  //remove all repeating element from the array
  for (let i = 0; i < array.length; i++) {

    let element = array[i];

    if (newArray.includes(element)) {

      continue;

    }


    newArray.push(element);


  }

  console.log(newArray.join(' '));

}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([1, 2, 3, 4])