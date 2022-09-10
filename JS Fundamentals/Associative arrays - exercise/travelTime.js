function travelTime(list) {

  let data = {};
  let cityInfo = {};

  for (let element of list) {

    let tokens = element.split(' > ');
    let country = tokens[0];
    let city = tokens[1];
    let price = Number(tokens[2]);



    if (!Object.keys(data).includes(country)) {

      data[country] = {}

    }


    if (!Object.keys(data[country]).includes(city)) {

      data[country][city] = Number(price);

    }

    else if (Number(price) < data[country][city]) {

      data[country][city] = price;

    }




  }

  let sortedCountries = Object
    .entries(data)
    .sort((a, b) =>
      a[0].localeCompare(b[0]) ||
      Object.values(a[1]).reduce((x, y) => x + y) - Object.values(b[1]).reduce((x, y) => x + y))


  for (let [country, towns] of sortedCountries) {



    let townsAsEntries = Object.entries(towns).map(x => `${x[0]} -> ${x[1]}`);

    console.log(`${country} -> ${townsAsEntries.join(' ')}`)


  }

}

travelTime
  (['Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200']);