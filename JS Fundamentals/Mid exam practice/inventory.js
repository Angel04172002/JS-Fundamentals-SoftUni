function inventory(input) {

  let items = input.shift().split(', ');
  let commands = {

    'Collect': collect,
    'Drop': drop,
    'Combine Items': combineItems,
    'Renew': renew

  }


  while (input[0] != 'Craft!') {

    let [command, item] = input.shift().split(' - ');
    let [oldItem, newItem] = item.split(':');
    let operation = commands[command];
    operation(items, item, oldItem, newItem);


  }

  console.log(items.join(', '));



  function collect(items, item) {

    if (!items.includes(item)) {

      items.push(item);

    }

  }


  function drop(items, item) {

    if (items.includes(item)) {

      items.splice(items.indexOf(item), 1);

    }
  }


  function combineItems(items, _, oldItem, newItem) {

    if (items.includes(oldItem)) {

      let index = items.indexOf(oldItem);
      items.splice(index + 1, 0, newItem);

    }

  }


  function renew(items, item) {

    if (items.includes(item)) {

      let element = items.splice(items.indexOf(item), 1);
      items.push(element);

    }

  }

}

inventory(
  ['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']
);