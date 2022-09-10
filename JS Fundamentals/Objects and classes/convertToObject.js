function convertToObject(string) {

  let object = JSON.parse(string);

  for (let key of Object.keys(object)) {

    console.log(`${key}: ${object[key]}`);

  }
}

console.log(convertToObject('{"name": "George", "age":40}'));