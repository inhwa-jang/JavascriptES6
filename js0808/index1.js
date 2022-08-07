var data = [1, 2, undefined, NaN, null, ""];

Array.prototype.getIndex = function() {};

for(let value of data) {
  // console.log(value);
}
// for ... of 명령문은 반복 가능한 객체에 대해서 반복하고 
// 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성한다.
// 배열의 반복은 for ... in 명령문보다 for ... of 명령문을 사용하는 것이 올바르다.

var str = "hello world!!!";
for(let value of str) {
  console.log(value);
}