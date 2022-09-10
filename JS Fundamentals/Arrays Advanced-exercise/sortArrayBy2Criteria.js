function sort(array) {

  array.sort((a, b) => {

    let length = a.length - b.length
    let comparison = a.localeCompare(b);
    return length || comparison;


  });

  console.log(array.join('\n'));

}

sort
  (['Isaac', 'Theodor', 'Jack', 'Harrison', 'George']);