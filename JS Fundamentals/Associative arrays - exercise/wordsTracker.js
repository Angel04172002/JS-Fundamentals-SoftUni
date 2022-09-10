function trackWords(list) {

  let wordsToTrack = list.shift().split(' ');
  let data = {};

  for (let element of wordsToTrack) {

    data[element] = 0;

  }


  for (let element of list) {

    if (Object.keys(data).includes(element)) {

      data[element] += 1;

    }

  }

  let sortedWords = Object.entries(data).sort((a, b) => b[1] - a[1])


  for (let [key, value] of sortedWords) {

    console.log(`${key} - ${Number(value)}`);

  }

}

trackWords
  (['this sentence', 'In', 'this', 'sentence', 'you', 'this']);