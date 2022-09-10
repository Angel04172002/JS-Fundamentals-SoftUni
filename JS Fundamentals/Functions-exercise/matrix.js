function matrixProblem(n) {

  let string = '';

  for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= n; j++) {

      string += `${n} `;

      if (j == n) {

        string += '\n';
        break;

      }

    }

  }

  return string;

}

console.log(matrixProblem(5));