function blackFlag(input) {

  let piratingDays = Number(input.shift());
  let plunderQuantityForDay = Number(input.shift());
  let expectedPlunder = Number(input.shift());
  let currentPlunder = 0;
  let additionalPlunder = (50 / 100) * plunderQuantityForDay;


  for (let i = 1; i <= piratingDays; i++) {

    currentPlunder += plunderQuantityForDay;

    if (i % 3 == 0) {

      currentPlunder += additionalPlunder;

    }

    if (i % 5 == 0) {

      currentPlunder -= ((30 / 100) * currentPlunder);

    }
  }


  if (currentPlunder >= expectedPlunder) {

    console.log(`Ahoy! ${currentPlunder.toFixed(2)} plunder gained.`)

  }


  else {

    let leftPercentage = ((currentPlunder / expectedPlunder) * 100);
    console.log(`Collected only ${leftPercentage.toFixed(2)}% of the plunder.`)
    //how many percent of total plunder are collected

  }

}


//100
//80
blackFlag(['10', '20', '380']);