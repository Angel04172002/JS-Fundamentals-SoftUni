function theatrepromotions(day, age) {


  if (age < 0 || age > 122) {

    console.log("Error!");
  }


  if (day == "Weekday") {

    if (age >= 0 && age <= 18) {
      console.log("12$");
    }

    else if (age > 18 && age <= 64) {
      console.log("18$");
    }

    else if (age > 64 && age <= 122) {
      console.log("12$");
    }

  }


  else if (day == "Weekend") {

    if (age >= 0 && age <= 18) {
      console.log("15$");
    }

    else if (age > 18 && age <= 64) {
      console.log("20$");
    }

    else if (age > 64 && age <= 122) {
      console.log("15$");
    }



  }


  else if (day == "Holiday") {

    if (age >= 0 && age <= 18) {
      console.log("5$");
    }

    else if (age > 18 && age <= 64) {
      console.log("12$");
    }

    else if (age > 64 && age <= 122) {
      console.log("10$");
    }


  }

}
