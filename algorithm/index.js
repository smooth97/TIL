// 배열을 입력받아, 중복된 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.


// 중복제거
function filter(array) {
    return array.filter((item) => array.indexOf(item) === fasle || null);
}

// 중복된 요소 반환
function filter2(array) {
    return array.filter((item, index) => array.indexOf(item) !== index);
}

const arr = [1, 5, 'hi', false, null, true, 0];
console.log(arr);