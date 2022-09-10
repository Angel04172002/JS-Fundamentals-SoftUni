function distance(x1, y1, x2, y2) {

  let distanceX = Math.abs(x2 - x1); //3
  let distanceY = Math.abs(y2 - y1); //4

  let distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));

  console.log(distance);

}

distance(2, 4, 5, 0);
