function race(input) {

  let namePattern = /[A-Za-z]/g;
  let numPattern = /\d/g;
  let racers = input.shift().split(', ');
  let raceData = {};

  for (let racer of racers) {

    raceData[racer] = 0;

  }


  while (input[0] != 'end of race') {

    let line = input.shift();

    let letters = line.match(namePattern);
    let numbers = line.match(numPattern);

    let name = letters.join('');
    let distance = numbers.map(Number);
    let totalDistance = 0;

    for (let x of distance) {

      totalDistance += x;

    }


    if (raceData[name] != undefined) {

      raceData[name] += totalDistance;

    }


  }

  let result = Object.entries(raceData).sort((a, b) => b[1] - a[1]);

  if (result[0]) {

    console.log(`1st place: ${result[0][0]}`);

  }

  if (result[1]) {

    console.log(`2nd place: ${result[1][0]}`);

  }

  if (result[2]) {


    console.log(`3rd place: ${result[2][0]}`);

  }


}

race(['George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race']);