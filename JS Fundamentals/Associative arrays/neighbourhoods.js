function neighbourhoods(array) {

  let neighbourhoodsList = array.shift().split(', ')
  let info = {};
  let dataArr = [];
  let isEqual = false;
  let pushedElements = [];

  for (let i = 0; i < array.length; i++) {

    let tokens = array[i].split(' - ');
    let name = tokens[0];
    let inhabitant = tokens[1];


    if (neighbourhoodsList.includes(name)) {

      let checkIndex = dataArr.findIndex(x => x.name == name);

      if (checkIndex != -1) {

        dataArr[checkIndex].inhabitant.push(inhabitant);
        continue;

      }

      info.name = name;
      info.inhabitant = [inhabitant];

      dataArr.push(info);

      info = {};

    }

  }


  for (let k = 0; k < neighbourhoodsList.length; k++) {

    let current = neighbourhoodsList[k];

    for (let j = 0; j < dataArr.length; j++) {

      if (current == dataArr[j].name) {

        isEqual = true;
        break;

      }

    }

    if (!isEqual) {

      info = {};
      info.name = current;
      info.inhabitant = [0];
      dataArr.push(info);
      pushedElements.push(info);

    }

    isEqual = false;

  }


  dataArr.sort((a, b) => b.inhabitant - a.inhabitant);


  for (let element of dataArr) {

    if (pushedElements.includes(element)) {
      console.log(`${element.name}: 0`)
      return;
    }

    else {
      console.log(`${element.name}: ${element.inhabitant.length}`)
    }

    for (let inh of element.inhabitant) {

      console.log(`--${inh}`);

    }
  }
}

neighbourhoods
  (['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);