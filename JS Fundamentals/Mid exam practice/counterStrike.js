function counterStrike(input) {

  let wonBattles = 0;
  let energy = Number(input.shift());  //100

  while (input[0] != 'End of battle') {

    let currentDistance = Number(input.shift());

    if (energy - currentDistance < 0) {

      console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
      return;

    }

    energy -= currentDistance;
    wonBattles++;

    if (wonBattles % 3 == 0) {

      energy += wonBattles;

    }
  }

  console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
}

counterStrike
  ([
    '100', '10', '10',
    '10', '1', '2',
    '3', '73', '10'
  ]
  );


counterStrike(['200', '54', '14', '28', '13', 'End of battle'])