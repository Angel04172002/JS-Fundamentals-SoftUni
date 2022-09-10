function gladiatorExpenses
  (lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

  let expenses = 0;

  //equipment - helmet, sword, shield, armour

  let i = 1;
  let shieldBreaks = 0;

  while (i <= lostFights) {

    if (i % 2 == 0) {
      expenses += helmetPrice;
    }

    if (i % 3 == 0) {
      expenses += swordPrice;
    }

    if (i % 2 == 0 && i % 3 == 0) {
      expenses += shieldPrice;
      shieldBreaks++;
      //2
    }

    if (shieldBreaks % 2 == 0 && shieldBreaks != 0) {
      expenses += armorPrice;
      shieldBreaks = 0;
    }

    i++;

  }


  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)


}

gladiatorExpenses(23, 12.5, 21.5, 40, 200);

//16