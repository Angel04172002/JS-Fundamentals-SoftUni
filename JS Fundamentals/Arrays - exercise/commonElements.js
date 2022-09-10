function commmonElements(array1, array2) {

  //go through all elements of first array

  for (let i = 0; i < array1.length; i++) {

    let currentElement = array1[i];

    for (let j = 0; j < array2.length; j++) {


      if (currentElement === array2[j]) {

        console.log(currentElement);

      }

    }

  }

}

commmonElements(["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]);
