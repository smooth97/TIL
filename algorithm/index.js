// 정수를 입력받아, 5 단위로 올림한 수를 반환하는 함수를 작성하세요.

//ceilBy5(32); -> 35
//ceilBy5(37); -> 40

const ceilBy5 = (n) => {
    const number = Math.round(n / 5) * 5;
    console.log(number)
}

ceilBy5(22);