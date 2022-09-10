function movingTarget(input) {

  let targets = input.shift().split(' ').map(Number);
  let commands = {

    'Shoot': shoot,
    'Strike': strike,
    'Add': add

  }


  while (input[0] != 'End') {

    let [command, index, value] = input.shift().split(' ');
    let operation = commands[command];
    operation(targets, index, value);

  }

  console.log(targets.join('|'));


  function shoot(targets, index, power) {

    index = Number(index);
    power = Number(power);

    if (validate(index)) {

      targets[index] -= power;

      if (targets[index] <= 0) {

        targets.splice(index, 1);

      }
    }
  }


  function strike(targets, index, radius) {

    index = Number(index);
    radius = Number(radius);


    let startIndex = index - radius;
    let endIndex = index + radius;

    if ((validate(startIndex)) && (validate(endIndex))) {

      let countRemoveItems = radius + radius + 1;
      targets.splice(startIndex, countRemoveItems);

    }

    else {

      console.log('Strike missed!');

    }
  }


  function add(targets, index, value) {

    index = Number(index);
    value = Number(value);

    if (validate(index)) {

      targets.splice(index, 0, value);

    }

    else {

      console.log('Invalid placement!')
    }
  }


  function validate(index) {

    return ((index >= 0) && (index < targets.length));

  }
}

movingTarget([
  '52 74 23 44 96 110',
  'Shoot 5 10',
  'Shoot 1 80',
  'Strike 2 1',
  'Add 22 3',
  'End'
]);


movingTarget(['1 2 3 4 5', 'Strike 0 1', 'End'])