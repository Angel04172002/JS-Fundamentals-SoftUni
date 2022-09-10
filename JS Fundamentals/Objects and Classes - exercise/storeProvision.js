function storeProvision(currentStock, productsForDelivery) {

  let currentProducts = currentStock.filter((x, i) => i % 2 == 0);
  let quantity = currentStock.filter((x, i) => i % 2 == 1).map(Number);


  for (let i = 0; i < productsForDelivery.length; i += 2) {

    let product = productsForDelivery[i];
    let quantityOfDelivery = Number(productsForDelivery[i + 1]);

    if (currentProducts.includes(product)) {

      quantity[currentProducts.indexOf(product)] += quantityOfDelivery;

    }

    else {

      currentProducts.push(product);
      quantity.push(quantityOfDelivery);

    }

  }


  //current products, quantity
  for (let j = 0; j < currentProducts.length; j++) {

    let object = {

      product: currentProducts[j],
      quantity: quantity[j]

    }

    console.log(`${object.product} -> ${object.quantity}`);


  }

}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);