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

단일 스레드 기반인 자바스크립트는 한번에 한 가지 일만 할 수 있기 때문에 여러 작업을 동시에 실행하기 위해서는 비동기 처리를 해야한다.
비동기 함수를 사용하면 메인 스레드를 차단하지 않고도 마치 동기 함수인 것처럼 프라미스 기반 코드를 작성할 수 있다.

### Promise

프로미스는 자바스크립트 비동기 처리에 사용되는 객체이다. 여기서 자바스크립트의 비동기 처리란 '특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성'을 의미한다.

프로미스는 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용한다. 일반적으로 웹 애플리케이션을 구현할 때 서버에서 데이터를 요청하고 받아오기 위해 API를 사용한다.

```
function getData(callbackFunc) {
  $.get('url 주소/products/1', function (response) {
    callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
  });
}

getData(function (tableData) {
  console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});
```

+ 이해하기 어려운 콜백 지옥을 피할 수 있다.
+ 읽기 쉬운 .then() 을 이용하여 연속적인 비동기 코드를 쉽게 작성할 수 있다.
+ Promise.all() 을 사용하여 병렬 비동기 코드를 쉽게 작성할 수 있다.

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

함수 정의 앞에 async 키워드를 사용하면 함수 내에 await를 사용할 수 있다. 프라미스를 await할 때 함수는 프라미스가 결정될 때까지 방해하지 않는 방식으로 일시 중지된다. 프라미스가 이행되면 값을 돌려받습니다. 프라미스가 거부되면 거부된 값이 반환(throw)된다.

await 사용 여부와는 상관없이, 비동기 함수는 항상 프라미스를 반환한다. 해당 프라미스는 무엇이든 비동기 함수가 반환하는 것과 함께 해결되거나 비동기 함수가 발생시키는 것과 함께 거부된다.

### Ajax

Ajax는 JavaScript의 라이브러리중 하나이며 Asynchronous Javascript And Xml(비동기식 자바스크립트와 xml)의 약자이다. 브라우저가 가지고있는 XMLHttpRequest 객체를 이용해서 전체 페이지를 새로 고치지 않고도 페이지의 일부만을 위한 데이터를 로드하는 기법 이며 Ajax를 한마디로 정의하자면 JavaScript를 사용한 비동기 통신, 클라이언트와 서버간에 XML 데이터를 주고받는 기술이라고 할 수 있다.


## Prototype

객체지향 언어인 Javascript에는 Class의 개념이 없고 대신 Prototype이 존재한다.
(ES6에 Class 추가됨)

함수와 **new** 키워드를 통해 class의 기능을 구현할 수 있다.

### Prototpye Link / Prototype Object

함수가 정의될 때 Constructor 자격이 부여되기 때문에 new 키워드를 사용할 수 있다.
함수만 생성되는 것이 아니라 Prototpye Object도 같이 생성된다.

**Prototpye Object** = 일반적인 객체와 같고 기본 속성으로 constructor와 __proto__를 갖는다.

constructor은 생성된 함수를 가리키고, __proto__는 Prototype Link 이다.

**Prototype Link** = 속성 받은 객체는 속성을 직접 갖고있지 않기 때문에 최상위 object의 prototype object 까지 탐색을 하고 없으면 undefined를 반환한다. 이렇게 __porto__ 속성을 통해 상위 프로토타입과 연결된 형태를 **프로토타입 체인** 이라 한다.



## Closure & Scope

### Scope

자바스크립트에서 스코프란 어떤 변수들에 접근할 수 있는지를 정의한다.
스코프에는 두 가지 종류가 있다.

+ 전역 스코프 (global scope) - 변수가 함수 바깥이나 중괄호 {} 바깥에 선언되었다면, 전역 스코프에 정의된다.

전역 변수를 선언하면, 코드 모든 곳에서 해당 변수를 사용할 수 있지만, 권장하지 않는다.
왜냐하면, 두 개 이상의 변수의 이름이 충돌하는 경우가 생기거나 보안에 취약하기 때문이다.

+ 지역 스코프(local scope) - 코드 특정 부분에서만 사용할 수 있는 변수는 지역 변수로 지역 스코프에 정의된다.

자바스크립트에서는 두 가지의 지역 변수가 존재한다. **함수 스코프**와 **블록 스코프**이다.

#### 함수 스코프 (Function Scope)

함수 내부에서 변수를 선언하면, 그 변수는 선언한 변수 내부에서만 접근할 수 있다. 함수 바깥에서는 해당 변수에 접근할 수 없다.

#### 블록 스코프 (Block Scope)

중괄호 {} 내부에서 **const** 또는 **let**으로 변수를 선언하면, 그 변수는 중괄호 블록 내부에서만 접근할 수 있는 블록 스코프를 갖게된다.

+ const - 선언 후 변수 재선언, 재할당이 불가능
+ let - 선언 후 변수에 재할당 가능

### Closure 

함수 내부에 함수를 작성할 때마다, 클로저를 생성한 것이다. 내부에 작성된 함수가 바로 클로저이다. 클로저는 차후에 외부 함수의 변수를 사용할 수 있기 때문에 대게 반환하여 사용한다.

자신을 감싸고 있는 바깥 함수의 변수에 접근할 수 있는 내부의 함수를 말한다.

---

# 개발 관련 지식

## 브라우저 렌더링 과정

브라우저에서 렌더링 성능은 중요한 요소 가운데 하나이다.
렌더링 성능을 향상시키면 사용자가 느끼는 체감 속도를 개선할 수 있다.
자바스크립트로 동적인 작업을 실행할 때 렌더링 문제를 최소화하여 성능을 높일 수 있다.

**HTTP요청 => DOM Tree 생성 / Style Struct 생성 => Render => Paint**

## 웹표준

'웹에서 표준적으로 사용되는 기술이나 규칙'을 의미하며, 웹 사이트에 접속한 사용자는 어떠한 운영체제나 브라우저를 사용하더라도 웹페이지의 정보가 동일하고 정상적으로 작동해야 함을 의미한다.

## 웹접근성

W3C의 정의에 따르면 웹표준은 접근성, 사생활 보호, 보안, 국제화의 측면에서 고려해야 한다고 한다. 특히, 이 중에 접근성을 '웹접근성'이라고 하며 웹표준과 함께 가장 많이 언급되는 개념이다.

+ 소스의 통일화로 수정 및 운영관리가 용이하다.
+ 다양한 브라우저, 휴대폰 PDA, 장애인 지원용 프로그램에서도 대응이 가능하다.
+ 검색봇을 통한 효율적 노출과 같은 검색엔진 최적화가 가능하다.
+ 효율적 소스를 통해 File Size 축소 및 서버 저장 공간을 절약할 수 있다.
+ CSS와 HTML 문서의 분리등을 통해 페이지 로딩속도 향상과 같은 효율적인 마크업이 가능하다.
+ 다양한 브라우저에서의 호환이 가능하다.


## Cross Browsing

표준 웹기술을 채용하여 다른 기종 혹은 플랫폼에 따라 달리 구현되는 기술을 비슷하게 만듦과 동시에 어느 한쪽에 최적화되어 치우치지 않도록 공통 요소를 사용하여 웹 페이지를 제작하는 기법.
지원할 수 없는 다른 웹 브라우저를 위한 장치를 구현하여 모든 웹 브라우저 사용자가 방문했을 때 정보로서의 소외감을 느끼지 않도록 하는 방법론 적인 가이드를 의미한다.

## SPA

Singe Page Application의 약자로 서버에서 데이터를 처음 한번만 받아와 로딩 후 
클라이언트 사이드 렌더링 (SSR) 기법을 사용해 서버에서 JSON 파일을 받아와 클라이언트의 요청에 따라 가상 DOM을 사용해 데이터만 변경해 뷰를 렌더링 하는 방식으로 가벼운 장점이 있다.
페이지 이동 시 재로딩 되는 깜빡임이 없어 사용자에게 더 나은 경험을 제공한다.

## React.js

프로젝트의 규모가 커질수록 DOM 관리와 상태값 업데이트 관리를 최소화하고, 오직 기능 개발, 그리고 사용자 인터페이스를 구현하는 것에 집중 할 수 있도록 하기위해서 여러 자바스크립트 라이브러리 , 프레임워크들이 만들어졌다.

대표적으로 React, Vue, Angular가 있고 상황에 따른 솔루션을 선택하면 된다.

**리액트**는 컴포넌트 개념에 집중이 되어있는 라이브러리로, 페이스북 개발자들이 지속해서 데이터가 변화하는 대규모 애플리케이션을 구축하기 위해 React를 만들었다.

- Virtual DOM을 사용해서 DOM 변화를 최소화 시켜 성능 최적화에 용이하다.
- 생태계가 크다. 많은 개발자들이 사용하는 만큼 다양한 라이브러리가 존재한다.

### Redux

Redux는 Javascript에서 흔히 쓰이는 State Container이다.
React뿐만 아니라 어떠한 Javascript 라이브러리와도 연결할 수 있는 State 관리 라이브러리이다.

어플리케이션에 컨테이너에서 데이터와 비지니스로 로직을 분리하여 리액트가 순전히뷰에만 관여할 수 있게해준다.

리덕스는 잠재적으로 React대신 다른 뷰 라이브러리로 바꿀 수 있게 해주기 때문에 어플리케이션을 더욱 유연하게 해준다.

