function adressBook(list) {

  let dataArr = [];

  for (let i = 0; i < list.length; i++) {

    let tokens = list[i].split(':');
    let name = tokens[0];
    let adress = tokens[1];

    if (i >= 1) {
      let checkIndex = dataArr.findIndex(x => x.name == name);

      if (checkIndex != -1) {

        dataArr[checkIndex].adress = adress;
        continue;

      }
    }

    let data = {
      name,
      adress
    }

    dataArr.push(data);

  }

  dataArr.sort((a, b) => a.name.localeCompare(b.name));

  for (let element of dataArr) {

    console.log(`${element.name} -> ${element.adress}`);

  }
}

adressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);
