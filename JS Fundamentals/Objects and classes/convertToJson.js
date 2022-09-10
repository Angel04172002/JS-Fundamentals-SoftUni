function convertToJson(firstName, lastName, hairColor) {

  let person = {

    name: firstName,
    lastName: lastName,
    hairColor: hairColor

  }

  let stringAsJson = JSON.stringify(person);

  return stringAsJson;

}

convertToJson();