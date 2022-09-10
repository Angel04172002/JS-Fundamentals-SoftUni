function minerTask(list) {

  let data = {};

  for (let i = 0; i < list.length - 1; i += 2) {

    let resource = list[i];
    let quantity = Number(list[i + 1]);

    if (Object.keys(data).includes(resource)) {

      data[resource] += quantity;
      continue;

    }

    data[resource] = quantity;

  }


  for (let [key, value] of Object.entries(data)) {

    console.log(`${key} -> ${value}`);

  }

}

minerTask(['Gold', '155', 'Silver', '10', 'Copper', '17', 'Gold', '15']);