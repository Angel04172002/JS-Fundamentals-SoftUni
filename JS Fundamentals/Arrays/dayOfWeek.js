function dayofWeek(number) {

  let days = [

    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'


  ]

  if (number < 0 || number > 7) {

    console.log('Invalid day!')
  }

  else {
    console.log(days[number - 1]);

  }



}

dayofWeek(5);
