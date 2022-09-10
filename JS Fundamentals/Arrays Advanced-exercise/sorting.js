function sorting(nums) {

  let sortedArray = [];
  let biggestToSmallest = nums.sort((a, b) => b - a);
  //[94, 69, 63, 52, 31, 21, 18, 3, 2, ]

  let biggest =
    biggestToSmallest.slice(0, Math.ceil(biggestToSmallest.length / 2));
  let smallest =
    biggestToSmallest.slice(Math.ceil
      (biggestToSmallest.length / 2));
  smallest.reverse();

  for (let i = 0; i < biggest.length; i++) {

    sortedArray.push(biggest[i]);

    if
      (nums.length % 2 == 1 && i == biggest.length - 1) {
      break;
    }

    sortedArray.push(smallest[i]);


  }

  console.log(sortedArray.join(' '));


}

sorting([21, 3, 52, 69, 63, 31, 2, 18, 94]);