function lift(input) {

  let countPeople = Number(input.shift());
  let stateOfLift = input.shift().split(' ').map(Number);
  let peopleOnWagon = 0;
  let isEmpty = false;


  for (let i = 0; i < stateOfLift.length; i++) {

    peopleOnWagon = 4 - stateOfLift[i];

    if (countPeople - peopleOnWagon < 0) {

      peopleOnWagon = countPeople;

    }


    countPeople -= peopleOnWagon;
    stateOfLift[i] += peopleOnWagon;


    if (stateOfLift[i] < 4) {

      console.log(`The lift has empty spots!`)
      isEmpty = true;

    }

  }


  if (countPeople > 0) {

    console.log(`There isn't enough space! ${countPeople} people in a queue!`)

  }


  if (countPeople == 0 && isEmpty == false) {

    console.log(stateOfLift.join(' '));
    return;

  }


  console.log(stateOfLift.join(' '));

}

lift(['8', '3 0 1']);