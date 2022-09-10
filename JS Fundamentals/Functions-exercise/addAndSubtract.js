function addAndSubtract(num1, num2, num3) {


  let add = sum(num1, num2);
  let result = subtract(add);
  return result;


  function sum(num1, num2) {

    let addition = num1 + num2;
    return addition;

  }

  function subtract(add) {

    let subtraction = add - num3;
    return subtraction;



  }

}

console.log(addAndSubtract(10, 20, 5));
