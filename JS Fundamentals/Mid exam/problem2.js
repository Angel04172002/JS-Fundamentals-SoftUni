function solve(input) {

  let numbers = input.shift().split(' ').map(Number);


  while (input[0] != 'END') {

    let tokens = input.shift();


    if (tokens.includes('add to start')) {

      let [a1, a2, a3, ...rest] = tokens.split(' ');
      rest = rest.map(Number);
      numbers.unshift(...rest);

    }


    else if (tokens.includes('add to end')) {

      let [a1, a2, a3, ...rest] = tokens.split(' ');
      rest = rest.map(Number);
      numbers.push(...rest);

    }


    else if (tokens.includes('remove lower than')) {


      let value = tokens.split(' ').pop();
      value = Number(value);

      for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] < value) {

          let index = numbers.indexOf(numbers[i]);
          numbers.splice(index, 1);
          i--;

        }
      }

    }


    else if (tokens.includes('remove greater than')) {

      let value = tokens.split(' ').pop();
      value = Number(value);

      for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] > value) {

          let index = numbers.indexOf(numbers[i]);
          numbers.splice(index, 1);
          i--;

        }
      }

    }


    else if (tokens.includes('replace')) {

      let list = tokens.split(' ');
      let replacement = list.pop();
      replacement = Number(replacement);
      let value = list.pop();
      value = Number(value);

      for (let num of numbers) {

        if (num == value) {

          let index = numbers.indexOf(num);
          numbers[index] = replacement;
          break;

        }
      }
    }


    else if (tokens.includes('remove at index')) {

      let index = tokens.split(' ').pop();

      if (validate(index)) {

        numbers.splice(index, 1);

      }

    }


    else if (tokens.includes('remove count')) {

      let count = tokens.split(' ').pop();
      let startIndexToRemove = (numbers.length) - count;

      if (validate(startIndexToRemove)) {

        numbers.splice(startIndexToRemove, count);

      }

      else {

        numbers.length = 0;


      }

    }


    else if (tokens.includes('find even')) {

      let evenIntegers = [];

      for (let num of numbers) {

        if (num % 2 == 0) {

          evenIntegers.push(num);

        }
      }

      console.log(evenIntegers.join(' '));

    }


    else if (tokens.includes('find odd')) {

      let oddIntegers = [];

      for (let num of numbers) {

        if (num % 2 == 1) {

          oddIntegers.push(num);

        }
      }

      console.log(oddIntegers.join(' '));

    }

  }


  function validate(index) {

    return ((index >= 0) && (index < numbers.length));

  }


  console.log(numbers.join(', '));

}

solve(['1 2 3 10 10 6 4 10', 'find odd', 'remove lower than 5', 'END']);