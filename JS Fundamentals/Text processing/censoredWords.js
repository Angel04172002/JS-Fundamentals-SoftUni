function censoredWords(text, word) {

  let found = text.includes(word);

  while (found) {

    text = text.replace(word, '*'.repeat(word.length));
    found = text.includes(word);

  }

  console.log(text);


}


censoredWords();
