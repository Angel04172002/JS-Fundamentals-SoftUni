function destinationMapper(input) {

  let pattern = /(=|\/)[A-Z][A-Za-z]{2,}(\1)/g;
  let matches = input.match(pattern);
  let travelPoints = 0;
  let destinations = [];


  if (matches != null) {

    for (let match of matches) {

      let substring = match.slice(1, -1);
      destinations.push(substring);
      let currentLength = substring.length;
      travelPoints += currentLength;

    }

  }


  console.log(`Destinations: ${matches ? destinations.join(', ') : ''}`);
  console.log(`Travel Points: ${travelPoints}`);


}

destinationMapper('ThisIs some InvalidInput');