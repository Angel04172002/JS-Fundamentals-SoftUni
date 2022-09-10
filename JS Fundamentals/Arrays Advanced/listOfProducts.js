function listOfProducts(products) {

  let orderedList = products.sort();

  for (let i = 0; i < orderedList.length; i++) {

    console.log(`${i + 1}.${orderedList[i]}`)


  }


}

listOfProducts();