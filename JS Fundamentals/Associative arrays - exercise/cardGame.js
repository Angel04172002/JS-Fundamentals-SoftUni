function cardGame(list) {


  let symbolsToValues = {

    'S': 4,
    'H': 3,
    'D': 2,
    'C': 1,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14


  }


  let playerData = {};
  let results = {};

  //name and cards
  for (let command of list) {

    let tokens = command.split(': ');
    let name = tokens[0];
    let cards = tokens[1].split(', ');

    if (!Object.keys(playerData).includes(name)) {
      playerData[name] = [];
    }

    playerData[name].push(...cards);

  }


  //name and points
  for (let [playerName, playerCards] of Object.entries(playerData)) {

    results[playerName] = 0;


    for (let i = 0; i < playerCards.length; i++) {

      let card = playerCards[i];
      let cardPoints = 0;

      if (playerCards.indexOf(card) == i) {

        let cardAsArray = card.split('');
        let type = cardAsArray.pop();
        let power = cardAsArray.join('');


        if (Object.keys(symbolsToValues).includes(power)) {

          cardPoints = symbolsToValues[power] * symbolsToValues[type];

        }

        else {

          cardPoints = Number(power) * symbolsToValues[type];

        }

      }

      results[playerName] += cardPoints;


    }

  }

  for (let [key, value] of Object.entries(results)) {

    console.log(`${key}: ${value}`)

  }

}


cardGame(['Pesho: 2C, 4H, 9H, AS, QS',
  'Slav: 3H, 10S, JC, KD, 5S, 10S',
  'Peshoslav: QH, QC, QS, QD',
  'Slav: 6H, 7S, KC, KD, 5S, 10C',
  'Peshoslav: QH, QC, JS, JD, JC',
  'Pesho: JD, JD, JD, JD, JD, JD']);
