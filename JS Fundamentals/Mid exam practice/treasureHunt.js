function treasureHunt(input) {

  let items = input.shift().split('|');
  let totalLength = 0;
  let commands = {

    'Loot': loot,
    'Drop': drop,
    'Steal': steal

  }


  while (input[0] != 'Yohoho!') {

    let [command, ...value] = input.shift().split(' ');
    let operation = commands[command];
    operation(items, value);

  }


  for (let item of items) {

    let currentLength = item.length;
    totalLength += currentLength;

  }


  if (items.length == 0) {

    console.log(`Failed treasure hunt.`)

  }


  else {


    console.log(`Average treasure gain: ${(totalLength / items.length).toFixed(2)} pirate credits.`)

  }


  function loot(items, values) {

    for (let value of values) {

      if (!items.includes(value)) {

        items.unshift(value);

      }

    }
  }


  function drop(items, index) {

    index = Number(index);

    if (validate(index)) {

      let element = items.splice(index, 1);
      items.push(...element);

    }
  }



  function steal(items, count) {

    count = Number(count);

    let lastIndex = items.length - 1;
    let startRemoveIndex = lastIndex - count + 1;

    if (startRemoveIndex > 0) {
      let stolenItems = items.splice(startRemoveIndex, count);
      console.log(stolenItems.join(', '));
    }

    else {

      console.log(items.join(', '));
      items.length = 0;

    }

  }


  function validate(index) {


    return ((index >= 0) && (index < items.length));

  }
}

treasureHunt([

  'Diamonds|Silver|Shotgun|Gold',
  'Loot Silver Medals Coal',
  'Drop -1',
  'Drop 1',
  'Steal 6',
  'Yohoho!'


]
);