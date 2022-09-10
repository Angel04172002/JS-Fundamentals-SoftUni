function companyUsers(list) {

  let data = {};


  for (let i = 0; i < list.length; i++) {

    let [company, id] = list[i].split(' -> ');


    if (Object.keys(data).includes(company) && i >= 1) {

      if (!data[company].includes(id)) {

        data[company].push(id);

      }


      continue;


    }


    data[company] = [id];


  }


  let sortedItems = Object.entries(data).sort((a, b) => a[0].localeCompare(b[0]));


  for (let [key, values] of sortedItems) {

    console.log(key);

    for (let element of values) {

      console.log(`-- ${element}`);


    }

  }
}

companyUsers(['SoftUni -> AA12345',
  'SoftUni -> CC12344',
  'Lenovo -> XX23456',
  'SoftUni -> AA12345',
  'Movement -> DD11111'])