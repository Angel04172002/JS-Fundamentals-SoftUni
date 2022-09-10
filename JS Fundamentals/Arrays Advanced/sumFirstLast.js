function sumFirstLast(numsAsStrings) {

  let first = Number(numsAsStrings.shift());
  let last = Number(numsAsStrings.pop());
  return first + last;

}

console.log(sumFirstLast(['5', '10']));