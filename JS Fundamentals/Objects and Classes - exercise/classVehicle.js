function vehicle() {

  class Vehicle {

    constructor(type, model, parts, fuel) {

      this.type = type;
      this.model = model;
      this.parts = parts;
      parts.quality = this.parts['engine'] * this.parts['power'];
      this.fuel = Number(fuel);


    }


    drive(loss) {

      return this.fuel -= loss;

    }
  }

}



let parts = {
  engine: 6,
  power: 100
}

let vehicle = new Vehicle();
