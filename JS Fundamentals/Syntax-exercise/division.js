function division(input) {


  if (input % 10 == 0) {
    console.log("The number is divisible by 10");
  }


  else if (input % 7 == 0) {
    console.log("The number is divisible by 7");
  }


  else if (input % 6 == 0) {
    console.log("The number is divisible by 6");
  }


  else if (input % 3 == 0) {
    console.log("The number is divisible by 3");
  }

  else if (input % 2 == 0) {
    console.log("The number is divisible by 2");
  }

  else {

    console.log("Not divisible");
  }



}

division();