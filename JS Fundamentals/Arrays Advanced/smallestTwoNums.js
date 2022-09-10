function smallest(nums) {


  let smallestNums = [];
  let smallToBig = nums.sort((a, b) => a - b);

  smallestNums.push(smallToBig[0], smallToBig[1]);


  console.log(smallestNums.join(' '));

}

smallest([30, 15, 50, 5]);