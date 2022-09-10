function processOddNums(array) {

  let oddPositions = [];
  let doubled = [];
  let reversed = [];

  oddPositions = array.filter((x, i) => i % 2 == 1);
  doubled = oddPositions.map(x => x * 2);
  reversed = doubled.reverse();


  console.log(reversed.join(' '));


}

processOddNums([10, 15, 20, 25]);