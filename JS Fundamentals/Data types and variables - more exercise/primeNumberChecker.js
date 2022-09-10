function primeNumberChecker(number) {

  let isPrime = true;

  for (let i = 2; i < number; i++) {

    if (number % i == 0) {

      isPrime = false;
      break;

    }

  }

  if (isPrime == false) {
    console.log('false');
  }

  else {
    console.log('true');
  }


}

primeNumberChecker();