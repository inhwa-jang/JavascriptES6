/*
from()
- 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운 Array 객체를 만든다.
- 유사 배열 객체(length 속성과 인덱싱 된 요소를 가진 객체)
- 순회 가능한 객체(MAp, Set 등 객체의 요소를 얻을 수 있는 객체)
*/

console.log(Array.from('Javascript')); // 문자열을 인자로 받아 배열로 반환한다.
console.log(Array.from([1,2,3],x => x + x)); // 첫번째 인자로 배열을, 두번째 인자로 각각의 배열에 적용할 함수를 건내주고 있다.

const s = new Set(['foo', 'window']);
console.log(Array.from(s)); // Set에서 배열을 만들어 반환한다.

/*
map()
배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
*/

// 배열 형태를 각진 객체(arguments)에서 배열 만들기
function addMark() {
  let newArray = Array.from(arguments);
  let newData = newArray.map(function(value) {
    return value + "!";
  });

  console.log(newData);
}
addMark(1,2,3,4,5);