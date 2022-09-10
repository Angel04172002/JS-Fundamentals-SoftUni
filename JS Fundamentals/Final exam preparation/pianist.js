function pianist(input) {

  let number = input.shift();
  let data = {};

  for (let i = 0; i < number; i++) {

    let [piece, composer, key] = input.shift().split('|');

    data[piece] = {

      composer,
      key

    }

  }


  while (input[0] != 'Stop') {

    let tokens = input.shift().split('|');

    if (tokens[0] == 'Add') {

      let [_, piece, composer, key] = tokens;

      if (data[piece] != undefined) {


        console.log(`${piece} is already in the collection!`)

      }

      else {


        data[piece] = {
          composer,
          key
        }

        console.log(`${piece} by ${composer} in ${key} added to the collection!`)

      }

    }



    else if (tokens[0] == 'Remove') {

      let [_, piece] = tokens;

      if (data[piece] != undefined) {

        delete data[piece];
        console.log(`Successfully removed ${piece}!`);


      }


      else {



        console.log(`Invalid operation! ${piece} does not exist in the collection.`)

      }


    }



    else if (tokens[0] == 'ChangeKey') {

      let [_, piece, newKey] = tokens;

      if (data[piece] != undefined) {


        data[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);

      }


      else {


        console.log(`Invalid operation! ${piece} does not exist in the collection.`)

      }


    }

  }

  let sortedPieces = Object.entries(data).sort((a, b) => {

    let namePiece1 = a[0];
    let namePiece2 = b[0];
    let composer1 = a[1].composer;
    let composer2 = b[1].composer;

    return namePiece1.localeCompare(namePiece2) ||
      composer1.localeCompare(composer2);


  });


  for (let [key, value] of sortedPieces) {


    console.log(`${key} -> Composer: ${value.composer}, Key: ${value.key}`);

  }


}

pianist([3,
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop']);