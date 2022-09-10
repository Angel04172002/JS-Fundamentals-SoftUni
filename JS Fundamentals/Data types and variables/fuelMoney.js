function fuelMoney(distance, passengers, priceFor1LiterDiesel) {

  let fuelOfEmptyBus = (distance / 100) * priceFor1LiterDiesel * 7;

  let consumptionOfFuelPeopleFor100Km = ((passengers * 0.1) * priceFor1LiterDiesel) / 100;

  //30 people will consume 3 l. for 100 km.

  let consumptionOfFuelPeople = consumptionOfFuelPeopleFor100Km * distance;


  let fuelNeeded = fuelOfEmptyBus + consumptionOfFuelPeople;

  let moneyForFuelNeeded = fuelNeeded.toFixed(2);

  console.log(`Needed money for that trip is ${moneyForFuelNeeded}lv.`);

}

fuelMoney(260, 9, 2.49);

//51.14
