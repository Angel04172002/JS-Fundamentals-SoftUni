function bitcoinMining(numbers) {

  //total amount of purchased bitcoins after purchasing gold

  let priceOfBitcoin = 11949.16;
  let priceOfGramOfGold = 67.51;
  let boughtBitcoins = 0;
  let bitcoinsICanBuy = 0;
  let moneyLeft = 0;
  let firstBoughtBitcoinDay;
  let days = numbers.length;
  let totalAmountOfMoney = 0;

  for (let i = 1; i <= days; i++) {

    let minedGramsOfGold = numbers.shift();

    if (i % 3 == 0) {

      minedGramsOfGold = minedGramsOfGold - (30 / 100 * minedGramsOfGold);
    }

    let moneyCurrentDay = priceOfGramOfGold * minedGramsOfGold;


    totalAmountOfMoney += moneyCurrentDay;


    //one bought bitcoin

    if (priceOfBitcoin <= totalAmountOfMoney) {

      bitcoinsICanBuy = Math.floor(totalAmountOfMoney / priceOfBitcoin);


      if (boughtBitcoins == 0) {

        firstBoughtBitcoinDay = i;

      }
    }


    moneyLeft = totalAmountOfMoney - (priceOfBitcoin * bitcoinsICanBuy);
    totalAmountOfMoney = totalAmountOfMoney - (priceOfBitcoin * bitcoinsICanBuy);
    boughtBitcoins += bitcoinsICanBuy;


  }


  console.log('Bought bitcoins: ' + boughtBitcoins);

  if (boughtBitcoins > 0) {

    console.log('Day of the first purchased bitcoin: ' + firstBoughtBitcoinDay);

  }

  console.log('Left money: ' + moneyLeft.toFixed(2) + ' ' + 'lv.');


}


bitcoinMining([100, 200, 300]);