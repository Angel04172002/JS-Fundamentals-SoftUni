function multiplicationTable(input) {

  let product = 0;

  for (let i = 1; i <= 10; i++) {

    product = input * i;

    console.log(`${input} X ${i} = ${product}`)

  }

}

multiplicationTable();