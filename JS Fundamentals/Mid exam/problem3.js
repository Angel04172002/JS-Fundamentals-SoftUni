function solve(input) {

  let numbers = input.shift().split(' ').map(Number);


  while (input[0] != 'END') {

    let [command, num1, num2] = input.shift().split(' ');
    num1 = Number(num1);
    num2 = Number(num2);


    if (command == 'Change') {

      if (numbers.includes(num1)) {

        let index = numbers.indexOf(num1);
        numbers[index] = num2;

      }
    }



    else if (command == 'Hide') {

      if (numbers.includes(num1)) {

        let index = numbers.indexOf(num1);
        numbers.splice(index, 1);

      }
    }



    else if (command == 'Switch') {

      if (numbers.includes(num1) && numbers.includes(num2)) {

        let firstIndex = numbers.indexOf(num1);
        let secondIndex = numbers.indexOf(num2);
        let element = numbers[firstIndex];
        numbers[firstIndex] = numbers[secondIndex];
        numbers[secondIndex] = element;

      }
    }



    else if (command == 'Insert') {

      let index = num1 + 1;

      if (validate(index)) {

        numbers.splice(index, 0, num2);

      }
    }


    else if (command == 'Reverse') {

      numbers.reverse();

    }
  }


  console.log(numbers.join(' '));


  function validate(index) {

    return ((index >= 0) && (index < numbers.length));

  }
}

solve([
  '115 115 101 114 73 111 116 75',
  'Insert 5 114',
  'Switch 116 73',
  'Hide 75',
  'Reverse',
  'Change 73 70',
  'Insert 10 85',
  'END'
]
);