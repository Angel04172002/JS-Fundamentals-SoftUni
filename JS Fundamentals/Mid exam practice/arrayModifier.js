function arrayModifier(input) {

  let integers = input.shift().split(' ').map(Number);
  let commands = {

    'swap': swap,
    'multiply': multiply,
    'decrease': decrease

  }

  while (input[0] != 'end') {

    let [command, index1, index2] = input.shift().split(' ');
    let operation = commands[command];
    operation(integers, index1, index2)

  }

  console.log(integers.join(', '));


  function swap(integers, index1, index2) {

    index1 = Number(index1);
    index2 = Number(index2);
    let element = integers[index1];
    integers[index1] = integers[index2];
    integers[index2] = element;

  }


  function multiply(integers, index1, index2) {


    index1 = Number(index1);
    index2 = Number(index2);
    let result = integers[index1] * integers[index2];
    integers[index1] = result;

  }


  function decrease(ints) {

    for (let j = 0; j < ints.length; j++) {

      ints[j] -= 1;

    }

  }
}

arrayModifier([
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'
]
);
