function sumoddnumbers(num) {

  let sum = 0;
  let testnum = (2 * num) - 1;

  for (let i = 1; i <= testnum; i++) {

    if (i % 2 == 1) {
      console.log(i);
      sum += i;
    }

  }


  console.log("Sum: " + sum);

}



//3    1, 3, 5

sumoddnumbers(3);