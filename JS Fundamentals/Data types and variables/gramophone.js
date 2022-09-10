function gramophone(bandName, albumName, songName) {

  let songDuration = (albumName.length * bandName.length) * songName.length / 2;

  let rotations = songDuration / 2.5;

  let rotationsRounded = Math.ceil(rotations);

  console.log('The plate was rotated ' + rotationsRounded + ' times.');

}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');