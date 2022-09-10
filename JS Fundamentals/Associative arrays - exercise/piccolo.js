function piccolo(list) {

  let cars = [];

  for (let i = 0; i < list.length; i++) {

    let tokens = list[i].split(', ');
    let command = tokens[0];
    let carNumber = tokens[1];

    if (command == 'IN') {

      if (!cars.includes(carNumber)) {

        cars.push(carNumber);

      }

    }


    else {


      if (cars.includes(carNumber)) {


        let indexOfDeletion = cars.indexOf(carNumber);
        cars.splice(indexOfDeletion, 1);

      }

    }

  }

  let sortedCars = cars.sort((a, b) => a.localeCompare(b));


  if (sortedCars.length == 0) {
    console.log('Parking Lot is Empty')
  }

  else {

    console.log(sortedCars.join('\n'));

  }

}

piccolo();