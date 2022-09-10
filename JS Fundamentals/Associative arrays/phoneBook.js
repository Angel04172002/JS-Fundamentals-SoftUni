function phoneBook(list) {

  let infoList = [];

  for (let i = 0; i < list.length; i++) {

    let tokens = list[i].split(' ');
    let name = tokens[0];
    let phoneNumber = tokens[1];

    if (i >= 1) {

      let index = infoList.findIndex(x => x.name == name);

      if (index != -1) {

        infoList[index].phoneNumber = phoneNumber;
        continue;

      }

    }


    let info = {

      name,
      phoneNumber


    }

    infoList.push(info);


  }


  for (let element of infoList) {

    console.log(`${element.name} -> ${element.phoneNumber}`)


  }
}

phoneBook
  (['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);