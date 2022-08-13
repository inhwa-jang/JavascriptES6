let pre = [100, 200, "hello", null];
let newData = [0,1,2,3,...pre,4];
// spread연산자를 이용해서 배열의 요소 중간에 요소를 추가할 수 있다.
// console.log(newData);

// spread연산자가 나오기 전에는 apply()메서드를 이용해서 인수로 전달받아 함수를 호출했다
function sum(a,b,c){
  return a + b + c;
}
let pre2 = [100,200,300];
console.log(sum.apply(null,pre2));
console.log(sum(...pre2));
