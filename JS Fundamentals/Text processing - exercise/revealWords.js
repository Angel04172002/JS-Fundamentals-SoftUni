function revealWords(string1, string2) {

  let splitted1 = string1.split(', ');
  let splitted2 = string2.split(' ');

  for (let element of splitted2) {

    if (element.includes('*')) {

      let length = element.length;
      let index = splitted1.findIndex(x => x.length == length);

      if (index != -1) {

        string2 = string2.replace(element, splitted1[index]);

      }

    }

  }


  console.log(string2);

}

revealWords
  ('great, learning',
    'softuni is ***** place for ******** new programming languages'
  );