function cone(radius, height) {


  let coneVolume = 1 / 3 * (Math.pow(radius, 2) * height * Math.PI);
  let surfaceArea = Math.PI * radius * (radius + Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2)));

  console.log(`volume = ${coneVolume.toFixed(4)}`);
  console.log(`area = ${surfaceArea.toFixed(4)}`);

}

cone(12, 15);
