function oddOccurences(list) {

  let occurences = {};
  let words = list.split(' ');


  for (let string of words) {

    let lowercaseString = string.toLowerCase();

    if (!Object.keys(occurences).includes(lowercaseString)) {

      occurences[lowercaseString] = 0;

    }


    occurences[lowercaseString] += 1;


  }


  let result = [];

  for (let [key, value] of Object.entries(occurences)) {

    if (value % 2 != 0) {

      result.push(key);

    }
  }

  console.log(result.join(' '));

}


oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');