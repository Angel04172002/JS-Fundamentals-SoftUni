function computerStore(input) {

  //I receive the prices without tax of the parts
  let totalPrice = 0;
  let priceWithoutTaxes = 0;
  let totalTaxes = 0;
  let currentTax = 0;
  let typeOfCustomer = input.pop();


  for (let i = 0; i < input.length; i++) {

    let currentPartPrice = Number(input[i]);


    if (currentPartPrice < 0) {

      console.log('Invalid price!');
      continue;

    }

    currentTax = (20 / 100) * currentPartPrice;
    totalTaxes += currentTax;
    priceWithoutTaxes += currentPartPrice;

  }

  if (priceWithoutTaxes == 0) {

    console.log('Invalid order!')
    return;

  }


  totalPrice = priceWithoutTaxes + totalTaxes;
  let discountSpecial = (10 / 100) * totalPrice;


  if (typeOfCustomer == 'special') {

    console.log('Congratulations you\'ve just bought a new computer!');
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${totalTaxes.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${(totalPrice - discountSpecial).toFixed(2)}$`);

  }


  else {

    console.log('Congratulations you\'ve just bought a new computer!');
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${totalTaxes.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);

  }
}

computerStore
  ([
    '1050', '200',
    '450', '2',
    '18.50', '16.86',
    'special'
  ]);