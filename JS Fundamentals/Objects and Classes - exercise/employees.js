function employees(array) {

  for (let employee of array) {

    let object = {

      name: employee,
      personalNumber: employee.length


    }

    console.log
      (`Name: ${object.name} -- Personal Number: ${object.personalNumber}`);


  }
}

employees(['Silas Butler']);