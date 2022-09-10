function solve(input) {

  let number = Number(input.shift());
  let listOfCharcodes = [];

  let pattern = /(\*|@)([A-Z][a-z]{2,})\1:\s\[([A-Za-z])\]\|\[([A-Za-z])\]\|\[([A-Za-z])\]\|$/;


  for (let i = 0; i < number; i++) {

    let currentLine = input[i];
    let match = pattern.exec(currentLine);

    if (match != null) {

      let currentMatchedWord = match[2];

      for (let j = 3; j <= 5; j++) {

        let currentCharcode = match[j].charCodeAt(0);
        listOfCharcodes.push(currentCharcode);


      }

      console.log(`${currentMatchedWord}: ${listOfCharcodes.join(' ')}`);
      listOfCharcodes = [];

    }


    else {

      console.log('Valid message not found!');

    }

  }

}

solve(['3',
  '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
  '*tAGged*: [i][i][i]|',
  'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|']);