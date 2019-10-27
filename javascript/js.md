# JavaScript

## Es6

ECMAScript is a standard script language
자바스크립트 언어의 표준.

ES6 코드는 Babel을 이용하여, ES5 코드로 변환하는 것이 가능하다.

- const & let - block scope Constructs
- Class - Class 문법을 제공, constructor 메소드도 사용할 수 있고 extends를 통해서 클래스 상속도 가능.
- Module - Export, Import 를 이용해 function이나 variables 들을 다른 곳에서 사용할 수 있다.
- Promise - 비동기 프로세싱을 위해 사용 (Asynchronously) 가독성이 좋으며 중첩된 콜백의 단점을 완화함.
- 화살표 함수 - 화살표 함수는 자신의 this가 바인드 되지 않기 때문에 함수의 스코프에서의 this 가 적용됨.
- 비구조화 할당 - 객체나 배열의 필드 값을 원하는 개별 변수에 대입할 수 있다.
- 템플릿 리터럴 - + 연산자를 사용하지 않아도 간단한 방법으로 새로운 문자열을 삽입할 수 있는 기능을 제공
- spread - 원본 배열을 바꾸지 않고 열거 가능한 요소를 하나씩 전개한다.

---

## 객체 생성자 & Class

### 객체 생성자

```
// 일반 함수와 구분하기 위해 이름은 대문자로 시작
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  console.log(this);
  // Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
  // Animal {type: "개", name: "멍멍이", sound: "멍멍!", say: ƒ}
}
```

**Prototpye 생성**

```
// 반복해서 사용하는 함수 프로토타입으로 만들어 주기
// 객체 생성자로 무언가를 만들었을 때 객체들이 공유하는 함수나 값을 프로토타입으로 만든다.
Animal.prototype.say = function() {
  console.log(this.sound);
};
```

**객체 생성 (Animal의 속성을 참조함)**

```
const dog = new Animal("개", "멍멍이", "멍멍!");
const cat = new Animal("고양이", "야옹이", "야옹~");

dog.say(); // 멍멍!
cat.say(); // 야옹~

```

**객체의 속성**

dog 라는 새 객체를 만들었더니 그 안에는 _proto_ 라는 객체가 있다.
그 안에는 constructor와 내가 만든 say prototpye, 다시 _proto_ 가 있다.

console.log(dog)

```
Animal {type: "개", name: "멍멍이", sound: "멍멍!"}
name: "멍멍이"
sound: "멍멍!"
type: "개"
__proto__:
say: ƒ ()
constructor: ƒ Animal(type, name, sound)
__proto__: Object
```

- constructor는 생성자 함수 그 자체를 가리킴
- prototype은 생성자 함수에 정의한 모든 객체가 공유할 원형
- *proto*는 생성자 함수를 new로 호출할 때 정의해둔 prototype을 참조한 객체

- prototype은 생성자 함수에 사용자가 직접 넣는 거고, *proto*는 new를 호출할 때 prototype을 참조해 자동생성
- 생성자에는 prototype, 생성자로부터 만들어진 객체는 _proto_

**객체 생성자 상속**

```
// 객체 생성자 상속
function Dog(name, sound) {
  // 타입을 자체적으로 지정
  // call()의 첫 번째 파라미터 = 이 객체 생성자의 this
  // 다음은 파라미터
  Animal.call(this, "개", name, sound);
}

// 프로토타입 공유
Dog.prototype = Animal.prototype;
```

### class

class가 javascript에 없기 때문에 객체 생성자를 만드는 방법으로 대체해서 사용했었다.
Es6에 class 문법이 추가됐다.

```
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  // class 내부에 함수를 생성하면 자동으로 prototype으로 지정됨
  say() {
    console.log(this.sound);
  }
}

const dog = new Animal("개", "멍멍이", "멍멍!");
const cat = new Animal("고양이", "야옹이", "야옹~");

dog.say(); // 멍멍!
cat.say(); // 야옹~
```

**상속**

```
// extends 키워드를 사용해서 상속
class Dog extends Animal {
  constructor(name, sound) {
    super("개", name, sound); // 상속받는 constructor를 적용
  }
}
class Cat extends Animal {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}

const dog = new Dog("멍멍이", "멍멍!");
const cat = new Cat("야옹이", "야옹~");

dog.say(); // 멍멍!
cat.say(); // 야옹~

```

**class 다른 연습 예제**

```
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

```

---

## 비동기

비동기 함수를 사용하면 메인 스레드를 차단하지 않고도 마치 동기 함수인 것처럼 프라미스 기반 코드를 작성할 수 있습니다.

### async await

```
async function asyncFunction() {
    try {
        const value = await promise;
    }
    catch (rejectedValue) {
        // ..
    }
}
```

함수 정의 앞에 async 키워드를 사용하면 함수 내에 await를 사용할 수 있습니다. 프라미스를 await할 때 함수는 프라미스가 결정될 때까지 방해하지 않는 방식으로 일시 중지됩니다. 프라미스가 이행되면 값을 돌려받습니다. 프라미스가 거부되면 거부된 값이 반환(throw)됩니다.

await 사용 여부와는 상관없이, 비동기 함수는 항상 프라미스를 반환합니다. 해당 프라미스는 무엇이든 비동기 함수가 반환하는 것과 함께 해결되거나 비동기 함수가 발생시키는 것과 함께 거부됩니다.

---

# 개발 관련 지식

## 브라우저 렌더링 과정

브라우저에서 렌더링 성능은 중요한 요소 가운데 하나이다.
렌더링 성능을 향상시키면 사용자가 느끼는 체감 속도를 개선할 수 있다.
자바스크립트로 동적인 작업을 실행할 때 렌더링 문제를 최소화하여 성능을 높일 수 있다.

**HTTP요청 => DOM Tree 생성 / Style Struct 생성 => Render => Paint**
