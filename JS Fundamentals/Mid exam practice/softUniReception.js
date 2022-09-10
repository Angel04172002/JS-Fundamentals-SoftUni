function softUniReception(array) {

  let count1 = Number(array.shift());
  let count2 = Number(array.shift());
  let count3 = Number(array.shift());
  let students = Number(array.shift());
  let countStudentsAnsweredInHour = count1 + count2 + count3;
  let hours = 0;


  while (students > 0) {

    hours++;

    if (hours % 4 != 0) {

      students -= countStudentsAnsweredInHour;


    }

  }

  console.log(`Time needed: ${hours}h.`);

}

softUniReception([5, 6, 4, 20]);