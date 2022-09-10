function storage(list) {

  let storage = new Map();


  for (let i = 0; i < list.length; i++) {

    let tokens = list[i].split(' ');
    let product = tokens[0];
    let price = Number(tokens[1]);



    if (!storage.has(product)) {
      storage.set(product, price);
    }

    else {

      let quantity = storage.get(product);
      let newQuantity = quantity += price;
      storage.set(product, newQuantity)


    }
  }

  let keys = storage.keys();

  for (let key of keys) {

    console.log(`${key} -> ${storage.get(key)}`);


  }

}

storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);