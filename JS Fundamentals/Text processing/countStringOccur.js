function count(text, string) {

  let counter = 0;
  let splitted = text.split(' ');

  for (let element of splitted) {

    if (element == string) {

      counter++;

    }

  }


  console.log(counter);

}

count('This is apple and this is orange', 'is');