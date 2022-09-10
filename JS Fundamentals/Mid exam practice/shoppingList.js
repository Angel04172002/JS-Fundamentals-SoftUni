function shoppingList(groceries) {

  let products = groceries.shift().split('!');

  while (groceries[0] != 'Go Shopping!') {

    let [command, currentProduct, newProduct] = groceries.shift().split(' ');


    if (command == 'Unnecessary') {

      if (products.includes(currentProduct)) {

        let index = products.indexOf(currentProduct);
        products.splice(index, 1);


      }

    }


    else if (command == 'Urgent') {

      if (!products.includes(currentProduct)) {

        products.unshift(currentProduct);

      }

    }



    else if (command == 'Correct') {


      if (products.includes(currentProduct)) {


        let index = products.indexOf(currentProduct);
        products[index] = newProduct;

      }


    }



    else if (command == 'Rearrange') {

      if (products.includes(currentProduct)) {

        let index = products.indexOf(currentProduct);
        let element = products.splice(index, 1);
        products.push(element);


      }

    }


  }


  console.log(products.join(', '))

}


shoppingList
  (['Tomatoes!Potatoes!Bread', 'Unnecessary Milk', 'Urgent Tomatoes', 'Go Shopping!']);