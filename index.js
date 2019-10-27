class Food {
  constructor(name) {
    this.name = name;
    this.brans = [];
  }

  // 메소드 생성 (prototpye)
  addBrand(brand) {
    this.brans.push(brand);
  }

  print() {
    console.log(`${this.name}을/를 파는 음식점들`);
    console.log(this.brans.join(", "));
  }
}

const pizza = new Food("피자");
pizza.addBrand("피자헛");
pizza.addBrand("도미노 피자");

const chicken = new Food("치킨");
chicken.addBrand("굽네치킨");
chicken.addBrand("페리카나");

pizza.print();
// 피자을/를 파는 음식점들
// 피자헛, 도미노 피자
chicken.print();
// 치킨을/를 파는 음식점들
// 굽네치킨, 페리카나
