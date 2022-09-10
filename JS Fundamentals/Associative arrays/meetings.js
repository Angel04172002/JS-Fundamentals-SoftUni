function meetings(list) {

  let data = [];

  for (let i = 0; i < list.length; i++) {

    let tokens = list[i].split(' ');
    let day = tokens[0];
    let person = tokens[1];

    if (i >= 1) {

      let checkIndex = data.findIndex(x => x.day == day);

      if (checkIndex != -1) {

        console.log(`Conflict on ${day}!`);
        continue;

      }

    }


    let meeting = {

      day,
      person

    }

    data.push(meeting);

    console.log('Scheduled for ' + meeting.day)


  }


  for (let element of data) {

    console.log(`${element.day} -> ${element.person}`);


  }

}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);