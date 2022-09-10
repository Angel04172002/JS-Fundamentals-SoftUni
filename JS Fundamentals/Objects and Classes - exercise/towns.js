function towns(array) {

  for (let element of array) {

    let line = element.split(' | ');
    let town = line[0];
    let latitude = Number(line[1]).toFixed(2);
    let longitude = Number(line[2]).toFixed(2);

    let object = {

      town: town,
      latitude: latitude,
      longitude: longitude

    }

    console.log(object);

  }

}

towns();