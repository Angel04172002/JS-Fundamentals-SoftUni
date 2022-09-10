function sumLastKNums(n, k) {


  let slicedArray = [];
  let newArray = [1];
  let sum = 0;


  for (let i = 1; i < n; i++) {


    slicedArray = newArray.slice(-k);


    for (let j of slicedArray) {
      sum += j;
    }


    newArray.push(sum);
    sum = 0;



  }

  return newArray.join(' ');

}

console.log(sumLastKNums(6, 2));