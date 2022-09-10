function arrayManipulator(intArray, stringArray) {


  for (let i = 0; i < stringArray.length; i++) {

    let line = stringArray[i].split(' ');
    let command = line.shift();

    if (command == 'add') {

      add();

    }


    else if (command == 'addMany') {

      addMany();

    }

    else if (command == 'contains') {

      console.log(contains());

    }

    else if (command == 'remove') {

      remove();

    }

    else if (command == 'shift') {

      shift();

    }

    else if (command == 'sumPairs') {

      intArray = sumPairs();

    }

    else if (command == 'print') {

      let newArray = [];

      for (let i = 0; i < intArray.length; i++) {

        if (i == 0) {

          newArray.push(`${intArray[i]}`);
          continue;

        }

        newArray.push(` ${intArray[i]}`);

      }

      return `[ ${newArray} ]`;

    }



    function add() {

      let index = Number(line.shift());
      let element = Number(line.shift());
      intArray.splice(index, 0, element);

    }


    function addMany() {

      let index = Number(line.shift());
      intArray.splice(index, 0, ...line);
      intArray = intArray.map(Number);

    }


    function contains() {

      let element = Number(line.shift());

      for (let i = 0; i < intArray.length; i++) {

        if (intArray[i] == element) {

          return i;

        }

      }

      return -1;

    }


    function remove() {

      let index = Number(line.shift());
      intArray.splice(index, 1);

    }


    function shift() {

      let positions = Number(line.shift());

      for (let i = 1; i <= positions; i++) {

        let firstElement = intArray[0];

        for (let j = 0; j < intArray.length - 1;
          j++) {

          intArray[j] = intArray[j + 1];

        }

        intArray.pop();
        intArray.push(firstElement);

      }

    }


    function sumPairs() {

      let sumArray = [];
      let currentSum = 0;

      for (let i = 0; i < intArray.length; i += 2) {


        if (intArray.length % 2 == 1 && i == intArray.length - 1) {

          sumArray.push(intArray[i]);
          return sumArray;

        }

        currentSum = intArray[i] + intArray[i + 1];
        sumArray.push(currentSum);


      }

      return sumArray;

    }

  }

}

console.log(arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']))
