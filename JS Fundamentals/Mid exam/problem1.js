function vacation(input) {

  let currentExpenses = 0;
  let tripDays = Number(input.shift());
  let totalBudget = Number(input.shift());
  let countPeople = Number(input.shift());
  let fuelPricePerKm = Number(input.shift());
  let expensesForTravelPerDay = 0;
  let foodExpensesForAPerson = Number(input.shift());
  let hotelRoomPriceForAPerson = Number(input.shift());
  let travelledDistancePerDay = 0;
  let additionalExpenses = 0;
  let currentDay = 1;


  let totalFoodExpenses = foodExpensesForAPerson * countPeople * tripDays;
  currentExpenses += totalFoodExpenses;
  let totalHotelExpenses = hotelRoomPriceForAPerson * countPeople * tripDays;
  currentExpenses += totalHotelExpenses;

  if (countPeople > 10) {

    let discount = totalHotelExpenses - (0.25 * totalHotelExpenses);
    currentExpenses = totalFoodExpenses;
    currentExpenses += discount;

  }



  while (input[0] != undefined) {


    if (currentExpenses > totalBudget) {

      let remaining = currentExpenses - totalBudget;
      console.log(`Not enough money to continue the trip. You need ${remaining.toFixed(2)}$ more.`);
      return;

    }

    travelledDistancePerDay = Number(input.shift());
    expensesForTravelPerDay = travelledDistancePerDay * fuelPricePerKm;



    if ((currentDay % 3 == 0 && currentDay != 0) || (currentDay % 5 == 0 && currentDay != 0)) {

      currentExpenses += expensesForTravelPerDay;
      additionalExpenses = 0.4 * currentExpenses;
      currentExpenses += additionalExpenses;
      currentDay++;
      continue;


    }


    if (currentDay % 7 == 0 && currentDay != 0) {

      currentExpenses += expensesForTravelPerDay;
      let reduced = currentExpenses / countPeople;
      currentExpenses -= reduced;
      currentDay++;
      continue;

    }


    currentExpenses += expensesForTravelPerDay;

    expensesForTravelPerDay = 0;

    currentDay++;

  }


  if (currentExpenses > totalBudget) {

    let remaining = currentExpenses - totalBudget;
    console.log(`Not enough money to continue the trip. You need ${remaining.toFixed(2)}$ more.`);
    return;

  }


  let remaining = totalBudget - currentExpenses;
  console.log(`You have reached the destination. You have ${remaining.toFixed(2)}$ budget left.`)



}

vacation(
  [
    '10', '20500', '11',
    '1.2', '8', '13',
    '100', '150', '500',
    '400', '600', '130',
    '300', '350', '200',
    '300'
  ]


)
