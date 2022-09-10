function ladybugs(array) {

  let ladybugArr = [];
  let newRightIndex = 0;
  let newLeftIndex = 0;
  let isExited = false;

  let sizeOfField = array.shift();
  let initialIndexes = array.shift();
  let arrayOfInitialIndexes =
    (initialIndexes.split(' '));
  //['0', '1', '2']


  for (let i = 0; i < array.length; i++) {

    let command = array.shift();
    let commandArr = command.split(' ');
    let commandladybugIndex = Number(commandArr[0]);
    let direction = commandArr[1];
    let flyLength = Number(commandArr[2]);


    if (direction == 'right') {

      newRightIndex =
        (Number(arrayOfInitialIndexes[commandladybugIndex])) + flyLength;

    }


    else if (direction == 'left') {

      newLeftIndex =
        (Number(arrayOfInitialIndexes[commandladybugIndex])) + flyLength;



    }


    arrayOfInitialIndexes[commandladybugIndex] = undefined;


    while
      (typeof (arrayOfInitialIndexes[newRightIndex]) == 'string' || typeof (arrayOfInitialIndexes[newLeftIndex]) == 'string') {


      if (direction == 'right') {

        newRightIndex += flyLength;

        if (newRightIndex >= sizeOfField) {

          isExited = true;
          break;

        }

      }

      else {

        newLeftIndex -= flyLength;

        if (newLeftIndex < 0) {

          isExited = true;
          break;

        }


      }


    }

    if (isExited == false) {
      if (direction == 'right') {
        ladybugArr[newRightIndex] = 1;
      }

      else {
        ladybugArr[newLeftIndex] = 1;
      }
    }


    isExited = false;
    newRightIndex = 0;
    newLeftIndex = 0;



  }


  for (let k = 0; k < ladybugArr.length; k++) {

    if ((typeof (ladybugArr[k]) == undefined)) {

      ladybugArr[k] = 0;

    }

  }


  console.log(ladybugArr);

}

ladybugs([3, '0 1 2', '0 right 1', '2 right 1']);