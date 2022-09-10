function pascal(string) {

  let result = [];
  let word = '';
  let lower = string.toLowerCase();
  let lastIndex = 0;


  for (let i = 0; i < string.length; i++) {

    if (string[i] != lower[i]) {

      word = string.substring(lastIndex, i);
      lastIndex = i;

      if (word.length > 0) {

        result.push(word);

      }


    }

  }


  word = string.substring(lastIndex);

  if (word.length > 0) {

    result.push(word);

  }


  console.log(result.join(', '))


}

pascal('SplitMeIfYouCanHaHaYouCantOrYouCan');