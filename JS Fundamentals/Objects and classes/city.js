function city(object) {

  for (let key of Object.keys(object)) {

    console.log(`${key} -> ${object[key]}`);


  }

}

city();