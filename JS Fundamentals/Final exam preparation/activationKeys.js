function activationKeys(array) {

  let rawKey = array.shift();



  for (let i = 0; i < array.length; i++) {

    let tokens = array[i].split('>>>');

    if (tokens[0] == 'Slice') {

      let [_, startIndex, endIndex] = tokens;
      let substring = rawKey.substring(startIndex, endIndex);
      rawKey = rawKey.replace(substring, '');
      console.log(rawKey);


    }

    else if (tokens[0] == 'Flip') {

      let [_, word, startIndex, endIndex] = tokens;
      let partToReplace = rawKey.substring(startIndex, endIndex);
      let substring = rawKey.substring(startIndex, endIndex);

      if (word == 'Upper') {

        let subArr = substring.split('');
        subArr = subArr.map(x => x.toUpperCase());
        substring = subArr.join('');

      }

      else {

        let subArr = substring.split('');
        subArr = subArr.map(x => x.toLowerCase());
        substring = subArr.join('');


      }


      rawKey = rawKey.replace(partToReplace, substring);
      console.log(rawKey);

    }


    else if (tokens[0] == 'Contains') {

      let [_, substring] = tokens;

      if (rawKey.includes(substring)) {


        console.log(`${rawKey} contains ${substring}`);

      }

      else {

        console.log('Substring not found!')

      }



    }



  }


  console.log(`Your activation key is: ${rawKey}`);



}

activationKeys(['abcdefghijklmnopqrstuvwxyz',
  'Slice>>>2>>>6',
  'Flip>>>Upper>>>3>>>14',
  'Flip>>>Lower>>>5>>>7',
  'Contains>>>def',
  'Contains>>>deF',
  'Generate']);
