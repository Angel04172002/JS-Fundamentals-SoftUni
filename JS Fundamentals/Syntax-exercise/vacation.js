function vacation(people, groupType, day) {

  let price = 0;


  if (groupType == 'Students') {


    if (day == 'Friday') {
      price = 8.45 * people;
    }

    else if (day == 'Saturday') {
      price = 9.80 * people;

    }

    else if (day == 'Sunday') {
      price = 10.46 * people;

    }


    if (people >= 30) {

      price = price - (0.15 * price);


    }


  }



  else if (groupType == 'Business') {


    if (people >= 100) {


      if (day == 'Friday') {
        price = (people - 10) * 10.90;

      }

      else if (day == 'Saturday') {
        price = (people - 10) * 15.60;
      }

      else if (day == 'Sunday') {
        price = (people - 10) * 16;
      }

    }


    if (people < 100) {


      if (day == 'Friday') {
        price = 10.90 * people;
      }

      else if (day == 'Saturday') {
        price = 15.60 * people;
      }

      else if (day == 'Sunday') {
        price = 16 * people;
      }

    }

  }


  else if (groupType == 'Regular') {


    if (day == 'Friday') {
      price = 15 * people;
    }

    else if (day == 'Saturday') {
      price = 20 * people;
    }

    else if (day == 'Sunday') {
      price = 22.50 * people;
    }

    if (people >= 10 && people <= 20) {

      price = price - (0.05 * price);

    }

  }


  console.log('Total price: ' + price.toFixed(2));


}

vacation(40, 'Regular', 'Saturday');