function orders(product, quantity) {

  let price = 0;

  switch (product) {

    case 'coffee':
      price = 1.50 * quantity
      break;

    case 'coke':
      price = 1.4 * quantity
      break;

    case 'water':
      price = 1 * quantity;
      break;

    case 'snacks':
      price = 2 * quantity;
      break;


  }


  let finalPrice = price.toFixed(2);
  return finalPrice;



}

orders();