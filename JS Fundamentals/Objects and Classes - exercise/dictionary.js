function dictionary(list) {

  let arrayOfObjects = [];
  let lastKey = 0;
  let dictionary = {};


  for (let i = 0; i < list.length; i++) {

    let parsed = JSON.parse(list[i]);

    for (let key of Object.keys(parsed)) {

      if (i >= 1 && lastKey == key) {

        let index = arrayOfObjects.findIndex(x => x.term == key);
        arrayOfObjects[index].description = parsed[key];
        break;

      }

      lastKey = key;


      dictionary = {

        term: key,
        description: parsed[key]

      }

      arrayOfObjects.push(dictionary);

    }

  }


  arrayOfObjects.sort((a, b) => a.term.localeCompare(b.term));


  for (let element of arrayOfObjects) {

    console.log(`Term: ${element.term} => Definition: ${element.description}`);

  }

}

dictionary(['{ "Coffee": "A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub." }',
  '{ "Coffee": "A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare." }',
  '{ "Boiler": "A fuel-burning apparatus or container for heating water." }',
  '{ "Tape": "A narrow strip of material, typically used to hold or fasten something." }',
  '{ "Bus": "An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded." }']);