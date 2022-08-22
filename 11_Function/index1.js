// arrow function
// let newArr = [1,2,3,4,5].map(function(value, index, object){
//   return value * 2;
// })

let newArr = [1,2,3,4,5].map( (v) => v*2);
// 위와 같은 함수를 화살표 함수로 더 간결하게 나타낼 수 있다

console.log("arrow 2", newArr);