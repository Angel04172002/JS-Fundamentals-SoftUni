function bonusSystem(array) {

  let studentsCount = Number(array.shift());
  let lecturesCount = Number(array.shift());
  let initialBonus = Number(array.shift());


  let bonusOfCurrentStudent = 0;
  let highestBonus = 0;
  let attendancesOfstudentWithHighestBonus = 0;


  for (let i = 0; i < studentsCount; i++) {

    bonusOfCurrentStudent =
      (Number(array[i]) / lecturesCount) * (5 + initialBonus);

    if (bonusOfCurrentStudent > highestBonus) {

      highestBonus = bonusOfCurrentStudent;
      attendancesOfstudentWithHighestBonus = array[i];

    }

    bonusOfCurrentStudent = 0;

  }

  console.log(`Max Bonus: ${Math.round(highestBonus)}.`);
  console.log
    (`The student has attended ${attendancesOfstudentWithHighestBonus} lectures.`)



}



bonusSystem([5, 25, 30, 12, 19, 24, 16, 20]);

