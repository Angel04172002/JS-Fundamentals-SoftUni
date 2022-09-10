function schoolGrades(students) {

  let list = [];
  let averageGrades = [];
  let sum = 0;
  let averageGradeInfo = {};
  let studentInfo = {};


  //student info
  for (let i = 0; i < students.length; i++) {

    let tokens = students[i].split(' ');
    let name = tokens.shift();
    tokens.map(Number);


    if (i >= 1) {

      let index = list.findIndex(x => x.name == name);

      if (index != -1) {

        list[index].grades.push(...tokens);
        continue;

      }

    }

    studentInfo = {

      name: name,
      grades: tokens

    }

    list.push(studentInfo);


  }


  //average
  for (let student of list) {

    for (let j = 0; j < student.grades.length; j++) {

      sum += Number(student.grades[j]);

    }

    sum /= student.grades.length;
    averageGradeInfo.student = student.name;
    averageGradeInfo.averageGrade = sum;
    averageGradeInfo.grades = student.grades.map(Number);

    // averageGrades.push(studentInfo);
    averageGrades.push(averageGradeInfo);

    averageGradeInfo = {};
    sum = 0;

  }

  averageGrades.sort((a, b) => a.averageGrade - b.averageGrade);
  //averageGrades.sort((a, b) => a.averageGrade - b.averageGrade);




  //printing
  for (let line of averageGrades) {

    console.log(`${line.student}: ${line.grades.join(', ')}`)


  }

}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);