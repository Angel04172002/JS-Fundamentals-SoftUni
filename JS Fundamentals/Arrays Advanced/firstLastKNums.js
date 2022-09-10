function firstLast(array) {

  let number = array.shift();
  let leftPart = [];
  let rightPart = [];



  leftPart = array.slice(0, number);
  rightPart = array.slice(array.length - number, array.length);
  console.log(leftPart.join(' '));
  console.log(rightPart.join(' '));


}


firstLast([3, 6, 7, 8, 9]);