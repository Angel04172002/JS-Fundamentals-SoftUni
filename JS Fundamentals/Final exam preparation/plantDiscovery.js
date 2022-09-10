function plantDiscovery(input) {

  let number = Number(input.shift());
  let plantData = {};

  for (let i = 0; i < number; i++) {

    let [plant, rarity] = input.shift().split('<->');


    plantData[plant] = {

      rarity: Number(rarity),
      rating: [],
      averageRating: 0


    }

  }


  while (input[0] != 'Exhibition') {

    let tokens = input.shift().split(': ');

    if (tokens[0] == 'Rate') {

      let [plant, rating] = tokens[1].split(' - ');


      if (plantData[plant] == undefined) {

        console.log('error');
        continue;

      }


      plantData[plant].rating.push(Number(rating));


      let total = 0;

      for (let rating of plantData[plant].rating) {

        total += rating;

      }

      plantData[plant].averageRating = total / plantData[plant].rating.length;


    }



    else if (tokens[0] == 'Update') {

      let [plant, newRarity] = tokens[1].split(' - ');

      if (plantData[plant] == undefined) {

        console.log('error');
        continue;

      }

      plantData[plant]['rarity'] = Number(newRarity);


    }


    else if (tokens[0] == 'Reset') {

      let currentPlant = tokens[1];

      if (plantData[currentPlant] == undefined) {

        console.log('error');
        continue;


      }

      plantData[currentPlant].rating.length = 0;
      plantData[currentPlant].averageRating = 0;

    }


    else {


      console.log('error');

    }

  }



  let sortedPlants = Object.entries(plantData).sort((a, b) => {

    return (b[1].rarity - a[1].rarity) ||
      (b[1].averageGrade - a[1].averageGrade);

  });

  console.log('Plants for the exhibition:')


  for (let [key, value] of sortedPlants) {


    console.log(`- ${key}; Rarity: ${value.rarity}; Rating: ${value.averageRating.toFixed(2)}`);


  }


}




plantDiscovery([3,
  'Arnoldii<->4',
  'Woodii<->7',
  'Welwitschia<->2',
  'Rate: Woodii - 10',
  'Rate: Welwitschia - 7',
  'Rate: Arnoldii - 3',
  'Rate: Woodii - 5',
  'Update: Woodii - 5',
  'Reset: Arnoldii',
  'Exhibition']);