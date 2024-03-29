## 문제 1

양수를 입력받아 이 수를 반지름으로 하는 원의 넓이를 반환하는 함수를 작성하세요.

내 풀이

```
const circleArea = n => Math.PI * (n * n);
```

## 문제 2

두 정수 min, max 를 입력받아, min 이상 max 미만인 임의의 정수를 반환하는 함수를 작성하세요.

```
const random = (min, max) => {
    const rand = Math.floor(Math.random() * (max - min) + min);
    console.log(rand);
}
```

## 문제 3

정수를 입력받아, 5 단위로 올림한 수를 반환하는 함수를 작성하세요.
예:

```
ceilBy5(32); -> 35
ceilBy5(37); -> 40
```

내 풀이

```
const ceilBy5 = (n) => {
    const number = Math.ceil(n / 5) * 5;
    console.log(number)
}
```

5 단위로 내림한 수 반환

```
const ceilBy5 = (n) => {
    const number = Math.round(n / 5) * 5;
    console.log(number)
}
```

## 문제 4

배열을 입력받아, 요소들의 순서를 뒤섞은 새 배열을 반환하는 함수를 작성하세요.

## 문제 5

임의의 HTML 색상 코드를 반환하는 함수를 작성하세요.

## 문제 6

양수를 입력받아, 그 수만큼의 길이를 갖는 임의의 문자열을 반환하는 함수를 작성하세요.

## 문제 7

수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 표준편차를 구하는 함수를 작성하세요.
