function sum(array) {


  let sum = 0;

  sum += array[0];
  sum += array[array.length - 1];

  console.log(sum);


}

sum([20, 30, 40]);