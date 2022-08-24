// default parameters

// function sum(value, size) {
//   return value * size;
// }
// console.log(sum(3)); // NaN

// function sum(value, size) {
//   size = size || 1; // 선언부 코드 길이가 길어진다
//   return value * size;
// }
// console.log(sum(3)); // 3

// default parameter : 매개변수 값을 설정하는 것
function sum(value, size=1) { 
  return value * size;
}
console.log("sum의 결과값", sum(3,10)); // 30

// 매개변수가 object 형식일때
function sum2(value,size={value:1}){
  return value * size.value;
}
console.log("sum2의 결과값", sum2(3,{value:3})); // 9

function sum3({a = 0, b = { value: 0}}) {
  return a + b.value;
}
console.log("sum3의 결과값", sum3({b: { value: 10 }})); // 10
