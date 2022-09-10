function wordOccurences(stringList) {

  let counter = 0;
  let data = {};
  let infoList = [];


  for (let i = 0; i < stringList.length; i++) {

    let word = stringList[i]; //'here'

    let checker = infoList.find(x => x.word == word);

    if (checker) {

      continue;

    }


    for (let j = 0; j < stringList.length; j++) {


      let currentWord = stringList[j]; //is



      if (word == currentWord) {

        counter++;

      }

    }

    data.word = word;
    data.counter = counter;
    infoList.push(data);
    data = {};
    counter = 0;


  }

  infoList.sort((a, b) => b.counter - a.counter);


  for (let element of infoList) {

    console.log(`${element.word} -> ${element.counter} times`)

  }

}

wordOccurences
  (["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);