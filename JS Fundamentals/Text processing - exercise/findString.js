function find(word, text) {


  word = word.toLowerCase();
  text = text.toLowerCase();

  let splittedText = text.split(' ');

  for (let element of splittedText) {


    if (element == word) {

      isFound = true;
      console.log(word);
      return;

    }

  }

  console.log(`${word} not found!`)


}

find
  ('javascript',
    'JavaScript is the best programming language'
  );