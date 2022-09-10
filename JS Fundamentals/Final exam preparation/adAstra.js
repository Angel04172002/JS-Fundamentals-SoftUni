function adAsra(input) {

  let string = input.shift();
  let pattern = /(#|\|)[A-Z][A-Za-z\s]+\1(\d{2}\/\d{2}\/\d{2})\1[0-9][0-9]*\1/g
  let totalCalories = 0;
  let validProducts = {};
  let days = 0;
  let dataArr = [];


  let validMatches = string.match(pattern);

  if (validMatches != null) {

    for (let match of validMatches) {

      let subMatch = match.slice(1, -1);

      if (match.includes('#')) {

        subMatch = subMatch.split('#');

      }

      else {

        subMatch = subMatch.split('|');

      }


      let product = subMatch[0];
      let expirationDate = subMatch[1];
      let currentCalories = Number(subMatch[2]);
      totalCalories += currentCalories;

      validProducts = {
        product,
        expirationDate,
        currentCalories
      };

      dataArr.push(validProducts);

    }

    days = Math.floor(totalCalories / 2000);

  }


  console.log(`You have food to last you for: ${days} days!`)


  if (dataArr.length > 0) {

    for (let element of dataArr) {


      console.log(`Item: ${element.product}, Best before: ${element.expirationDate}, Nutrition: ${element.currentCalories}`);


    }

  }

}

adAsra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);