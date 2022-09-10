function cutAndReverse(string) {

  let length = string.length;
  let word1 = '';
  let word2 = '';

  let firstHalf = string.substring(0, Math.ceil(length / 2));
  let secondHalf = string.substring(Math.ceil(length / 2));

  for (let i = firstHalf.length - 1; i >= 0; i--) {

    word1 += firstHalf[i];

    if (string.length % 2 == 1) {

      if (i != 0) {

        word2 += secondHalf[i];
        continue;

      }

    }

    word2 += secondHalf[i];

  }

  console.log(word1);
  console.log(word2);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
