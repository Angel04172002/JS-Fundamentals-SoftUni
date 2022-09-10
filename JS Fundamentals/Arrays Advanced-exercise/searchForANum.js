function searchForNumber(array1, array2) {

  let countElements = array2.shift();
  let deleteCountElements = array2.shift();
  let searchNumber = array2.shift();
  let occurances = 0;


  let takenElements = array1.slice(0, countElements);

  takenElements.splice(0, deleteCountElements);


  for (let digit of takenElements) {

    if (digit == searchNumber) {

      occurances++;


    }

  }


  console.log(`Number ${searchNumber} occurs ${occurances} times.`)


}

searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);