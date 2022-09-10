function inventory(array) {

  let inventory = array.shift().split(' ');

  for (let i = 0; i < array.length; i++) {

    let line = array[i].split(' ');
    let command = line[0];

    if (command == 'Buy') {

      let item = line[1];

      if (!inventory.includes(item)) {

        inventory.push(item);

      }

    }


    else if (command == 'Trash') {

      let item = line[1];

      if (inventory.includes(item)) {

        let indexOfDeletion = inventory.indexOf(item);
        inventory.splice(indexOfDeletion, 1);


      }

    }


    else if (command == 'Repair') {

      let item = line[1];

      if (inventory.includes(item)) {

        inventory.push(item);
        let indexOfDeletion = inventory.indexOf(item);
        inventory.splice(indexOfDeletion, 1);

      }

    }

    else if (command == 'Upgrade') {

      let itemAndUpgrade = line[1].split('-');
      let item = itemAndUpgrade[0];
      let upgrade = itemAndUpgrade[1];


      if (inventory.includes(item)) {

        let index = inventory.indexOf(item);
        inventory[index] += ` ${item}:${upgrade}`;

      }
    }
  }

  console.log(inventory.join(' '));

}

inventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);