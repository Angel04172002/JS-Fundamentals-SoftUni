function inPlace(array) {

  let originalValue = 0;

  /*
  array[0] = array[5];
  array[1] = array[4];
  array[2] = array[3];
  k = length - 1 - i
  */

  for (let i = 0; i < array.length / 2; i++) {

    originalValue = array[i];
    let distance = array.length - 1 - i;
    array[i] = array[distance];
    array[distance] = originalValue;



  }

  console.log(array.join(' '));


}

inPlace([10, 20, 30, 40, 50, 60])