function solve(catsAsStrings) {

  class Cat {

    constructor(name, age) {

      this.name = name;
      this.age = age;


    }

    meow() {

      console.log(`${this.name}, age ${this.age} says Meow`);

    }

  }


  let cats = [];

  for (let catData of catsAsStrings) {

    let [name, age] = catData.split(' ');
    let cat = new Cat(name, age);
    cats.push(cat);

  }

  for (let cat of cats) {
    cat.meow();
  }

}

solve(['Mellow 2'], ['Tom 5']);



