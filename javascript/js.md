# 개발 관련 지식

## 브라우저 렌더링 과정

브라우저에서 렌더링 성능은 중요한 요소 가운데 하나이다.
렌더링 성능을 향상시키면 사용자가 느끼는 체감 속도를 개선할 수 있다.
자바스크립트로 동적인 작업을 실행할 때 렌더링 문제를 최소화하여 성능을 높일 수 있다.

**HTTP요청 => DOM Tree 생성 / Style Struct 생성 => Render => Paint**

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
