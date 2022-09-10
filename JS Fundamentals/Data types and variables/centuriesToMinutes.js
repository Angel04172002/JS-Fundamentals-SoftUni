function centuriesToMinutes(centuries) {

  let centuryInYears = 100 * centuries;

  let centuryInDays = parseInt(centuryInYears * 365.2422);


  let centuryInHours = 24 * centuryInDays;


  let centuryInMinutes = 60 * centuryInHours;


  console.log(`${centuries} centuries = ${centuryInYears} years = ${centuryInDays} days = ${centuryInHours} hours = ${centuryInMinutes} minutes`)


}

centuriesToMinutes();