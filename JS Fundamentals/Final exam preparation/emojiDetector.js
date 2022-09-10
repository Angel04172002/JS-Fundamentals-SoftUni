function emoji([input]) {

  let threshold = 1;
  let validEmojis = [];


  let digits = input.match(/\d/g).map(Number);

  for (let digit of digits) {

    threshold *= digit;

  }


  let emojis = input.match(/(::|\*\*)[A-Z][a-z]{2,}(\1)/g);


  if (emojis != null) {


    for (let emoji of emojis) {

      let sliced = emoji.slice(2, -2);
      let sumOfChars = 0;

      for (let element of sliced) {

        sumOfChars += element.charCodeAt(0);

      }

      if (sumOfChars >= threshold) {

        validEmojis.push(emoji);

      }


    }

  }


  console.log(`Cool threshold: ${threshold}`);
  console.log(`${emojis ? emojis.length : 0} emojis found in the text. The cool ones are:`)

  for (let emoji of validEmojis) {

    console.log(`${emoji}`);

  }


}

emoji(['In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**']);