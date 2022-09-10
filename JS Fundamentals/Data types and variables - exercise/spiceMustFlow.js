function spiceMustFlow(sourceYield) {


  let totalSpice = 0;
  let days = 0;
  let currentSourceYield;
  let isBigger = false;

  if (sourceYield >= 100) {
    isBigger = true;
  }


  while (sourceYield >= 100) {

    currentSourceYield = sourceYield - 26;

    totalSpice += currentSourceYield;

    days++;
    sourceYield -= 10;


  }


  if (isBigger == true) {
    console.log(`${days}`)
    console.log(totalSpice - 26);
  }

}

spiceMustFlow(200);