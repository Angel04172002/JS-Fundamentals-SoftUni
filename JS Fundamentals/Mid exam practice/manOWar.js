function manoWar(input) {

  let pirateShip = input.shift().split('>').map(Number);
  let warShip = input.shift().split('>').map(Number);
  let maxHealthCapacity = Number(input.shift());
  let needRepair = ((20 / 100) * maxHealthCapacity);
  let counter = 0;
  let pirateShipSum = 0;
  let warshipSum = 0;


  while (input[0] != 'Retire') {

    let [command, index1, index2, damage] = input.shift().split(' ');
    index1 = Number(index1);
    index2 = Number(index2);
    damage = Number(damage);

    if (command == 'Fire') {

      if (validate(index1, warShip)) {


        if (warShip[index1] > 0) {

          warShip[index1] -= index2;

        }

        if (warShip[index1] <= 0) {

          console.log(`You won! The enemy ship has sunken.`)
          return;

        }

      }

    }


    else if (command == 'Defend') {

      if ((validate(index1, pirateShip)) && (validate(index2, pirateShip))) {

        for (let i = index1; i <= index2; i++) {

          if (pirateShip[i] > 0) {

            pirateShip[i] -= damage;

          }

          if (pirateShip[i] <= 0) {

            console.log(`You lost! The pirate ship has sunken.`)
            return;

          }

        }
      }
    }


    else if (command == 'Repair') {

      if (validate(index1, pirateShip)) {

        pirateShip[index1] += index2;

        if (pirateShip[index1] > 100) {

          pirateShip[index1] = 100;

        }

      }

    }


    else if (command == 'Status') {


      for (let section of pirateShip) {

        if (section < needRepair) {

          counter++;

        }

      }

      console.log(`${counter} sections need repair.`)
      counter = 0;

    }
  }


  for (let section of pirateShip) {

    pirateShipSum += section;

  }


  for (let section2 of warShip) {


    warshipSum += section2;

  }


  console.log(`Pirate ship status: ${pirateShipSum}`);
  console.log(`Warship status: ${warshipSum}`);



  function validate(index, ship) {


    return ((index >= 0) && (index < ship.length));

  }
}


manoWar(

  [
    '2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire'
  ]


);