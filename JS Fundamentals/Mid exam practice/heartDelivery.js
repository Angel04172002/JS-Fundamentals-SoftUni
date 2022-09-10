function heartDelivery(input) {

  let neighbourhood = input.shift().split('@').map(Number);
  let currentIndex = 0;
  let isSuccessful = true;
  let counter = 0;

  //integers in neighbourhood indicate needed number of hearts

  while (input[0] != 'Love!') {

    let [_, length] = input.shift().split(' ');
    length = Number(length);

    currentIndex += length;


    if (currentIndex >= neighbourhood.length) {

      currentIndex = 0;

    }


    if (neighbourhood[currentIndex] != 0) {

      neighbourhood[currentIndex] -= 2;

      if (neighbourhood[currentIndex] == 0) {

        console.log(`Place ${currentIndex} has Valentine's day.`)

      }


    }


    else {

      console.log(`Place ${currentIndex} already had Valentine's day.`)

    }

  }


  console.log(`Cupid's last position was ${currentIndex}.`);


  for (let house of neighbourhood) {

    if (house >= 2) {

      isSuccessful = false;
      counter++;

    }

  }


  if (isSuccessful) {

    console.log('Mission was successful.')

  }


  else {

    console.log(`Cupid has failed ${counter} places.`)

  }

}

heartDelivery
  (['2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Love!'
  ]);