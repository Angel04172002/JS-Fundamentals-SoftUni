function shootForWin(input) {

  let targets = input.shift().split(' ').map(Number);
  let targetValue = 0;
  let shotTargets = 0;

  while (input[0] != 'End') {

    let index = Number(input.shift());

    if (validate(index)) {

      targetValue = targets[index];

      if (targets[index] != -1) {

        targets[index] = -1;
        shotTargets++;

      }


      for (let j = 0; j < targets.length; j++) {

        if (j == index) {
          continue;
        }

        if (targets[j] > targetValue && targets[j] != -1) {

          targets[j] -= targetValue;

        }


        else if (targets[j] <= targetValue && targets[j] != -1) {

          targets[j] += targetValue;

        }
      }

    }

  }


  console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);


  function validate(index) {

    return ((index >= 0) && (index <= targets.length - 1));

  }
}

shootForWin(['24 50 36 70', '0', '4', '3', '1', 'End']);