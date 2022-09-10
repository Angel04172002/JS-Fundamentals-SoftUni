function worldTour(array) {

  let plannedStops = array.shift();

  for (let i = 0; i < array.length; i++) {

    let tokens = array[i].split(':');
    let command = tokens[0];


    if (command == 'Add Stop') {

      let [_, index, string] = tokens;

      if ((index >= 0) && (index < plannedStops.length)) {

        let left = plannedStops.substring(0, index);
        let right = plannedStops.substring(index);
        plannedStops = left + string + right;
        console.log(plannedStops);
      }

    }

    else if (command == 'Remove Stop') {

      let [_, startIndex, endIndex] = tokens;

      startIndex = Number(startIndex);
      endIndex = Number(endIndex);

      if ((startIndex >= 0) && (startIndex < plannedStops.length)
        && (endIndex >= 0) && (endIndex < plannedStops.length)) {

        let left = plannedStops.substring(0, startIndex);
        let right = plannedStops.substring(endIndex + 1);
        plannedStops = left + right;
        console.log(plannedStops);

      }
    }


    else if (command == 'Switch') {

      let [_, oldString, newString] = tokens;
      plannedStops = plannedStops.split(oldString).join(newString);
      console.log(plannedStops);


    }


    else if (command == 'Travel') {

      break;

    }


  }


  console.log(`Ready for world tour! Planned stops: ${plannedStops}`);


}

worldTour(['Hawai::Cyprys-Greece',
  'Add Stop:7:Rome',
  'Remove Stop:11:16',
  'Switch:Hawai:Bulgaria',
  'Travel']);