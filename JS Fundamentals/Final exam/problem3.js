function solve(input) {

  let library = {};


  let wordsToStore = input.shift().split(' | ');

  for (let currentWord of wordsToStore) {

    let [word, definition] = currentWord.split(': ');


    if (library[word] != undefined) {

      library[word].push(definition);

    }


    else {

      library[word] = [definition];

    }

  }

  let testWords = input.shift().split(' | ');
  let command = input.shift();



  if (command == 'Test') {

    test(testWords, library)

  }


  else {

    handOver(library);

  }



  function test(testWords, library) {

    let sortedDefinitions = '';

    for (let testWord of testWords) {

      if (library[testWord] != undefined) {

        if (library[testWord].length > 1) {

          sortedDefinitions =
            library[testWord].sort((a, b) => b.length - a.length);

        }

        else {


          sortedDefinitions = library[testWord]

        }


        console.log(`${testWord}:`);


        for (let definition of sortedDefinitions) {

          console.log(`-${definition}`);

        }
      }
    }
  }



  function handOver(library) {

    let words = Object.keys(library);
    let sortedWords = words.sort((a, b) => a.localeCompare(b));
    console.log(sortedWords.join(' '));


  }

}


solve
  (['programmer: an animal, which turns coffee into code | developer: a magician',
    'Pesho | Gosho',
    'Hand Over'
  ]);