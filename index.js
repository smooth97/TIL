class Foods {
  constructor(name) {
    this.name = name;
    this.brands = [];
  }

  addBrand(brand) {
    this.brands.push(brand);
  }

  print() {
    console.log(`${this.name}을 파는 음식점`);
    console.log(this.brands.join(", "));
  }
}

const taco = new Foods("타코");
taco.addBrand("타코벨");
taco.print();
