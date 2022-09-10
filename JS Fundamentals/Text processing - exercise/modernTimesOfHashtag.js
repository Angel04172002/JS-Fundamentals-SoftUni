function hashtag(string) {

  string = string.split(' ');

  for (let element of string) {

    element = element.split('');

    let containsNumber = element.find
      (x => Number.isNaN(Number(x)) == false);

    element = element.join('');

    if (element.length > 1 && element[0] == '#' && !containsNumber) {


      console.log(element.substring(1, element.length));


    }

  }

}

hashtag('Nowadays everyone uses # to tag a #7special word in #socialMedia');