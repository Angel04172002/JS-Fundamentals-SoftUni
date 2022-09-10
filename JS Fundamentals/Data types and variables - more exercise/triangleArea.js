function triangleArea(a, b, c) {

  let halfPerimeter = (a + b + c) / 2;
  let multiplication =
    halfPerimeter * (halfPerimeter - a) *
    (halfPerimeter - b) * (halfPerimeter - c);
  let result = Math.sqrt(multiplication);
  console.log(result);

}

triangleArea();