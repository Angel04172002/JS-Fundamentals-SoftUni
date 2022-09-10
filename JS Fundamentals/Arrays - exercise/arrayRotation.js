function arrayRotation(array, rotations) {

  let newArray = [];

  for (let i = 0; i < rotations; i++) {

    array[array.length] = array[i];

  }

  for (let i = rotations; i < array.length; i++) {

    newArray[newArray.length] = array[i];

  }


  console.log(newArray.join(' '));

}

arrayRotation([51, 47, 32, 61, 21], 2);