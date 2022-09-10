function furniture(input) {

  let furniture = [];
  let total = 0;

  let pattern = /^>>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)$/;

  while (input[0] != 'Purchase') {

    let line = input.shift();
    let match = pattern.exec(line);


    if (match != null) {

      let { name, price, qty } = match.groups;
      price = Number(price);
      qty = Number(qty);
      total += price * qty;
      furniture.push(name);


    }


  }

  console.log('Bought furniture:')

  for (let element of furniture) {

    console.log(element);

  }

  console.log(`Total money spend: ${total.toFixed(2)}`);


}

furniture(['>>Sofa<<312.23!3', 'Purchase']);