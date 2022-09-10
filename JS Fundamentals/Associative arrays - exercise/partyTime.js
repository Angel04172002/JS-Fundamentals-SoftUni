function partyTime(list) {

  let guests = [];
  let vipGuests = [];
  let indexOfPartyCommand = list.indexOf('PARTY');



  for (let i = 0; i < indexOfPartyCommand; i++) {

    let currentGuest = list[i];
    let firstLetter = Number(currentGuest[0]);

    if (!Number.isNaN(firstLetter)) {

      vipGuests.push(currentGuest);

    }


    else {

      guests.push(currentGuest);

    }

  }




  for (let i = indexOfPartyCommand + 1; i < list.length; i++) {

    let guest = list[i];

    if (!Number.isNaN(Number(guest[0]))) {

      let index = vipGuests.indexOf(guest);

      if (index != -1) {
        vipGuests.splice(index, 1);

      }

    }

    else {

      let index = guests.indexOf(guest);

      if (index != -1) {
        guests.splice(index, 1);

      }

    }

  }


  let totalCount = guests.length + vipGuests.length;
  console.log(totalCount);

  for (let element of vipGuests) {
    console.log(element);
  }


  for (let element of guests) {
    console.log(element);
  }

}

partyTime
  (['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);