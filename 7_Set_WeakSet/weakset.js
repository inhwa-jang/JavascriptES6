/*
WeakSet
- 참조를 가지고 있는 객체만 저장이 가능하다. 객체의 모음.
- 객체 형태를 중복없이 저장하려고 할 때 유용하다.
- Set처럼 임의의 유형의 값을 포함할 수 없다.

WeakSet 메서드
- WeakSet.prototype.add(value) : value를 추가한다.
- WeakSet.prototype.delete(value) : value를 삭제한다
- WeakSet.prototype.has(value) : WeakSet객체에 value값이 있는지 여부를 확인한다.
*/

let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj = {arr,arr2};
let ws = new WeakSet();

ws.add(arr);
// ws.add(111); // TypeError: Invalid value used in weak set
// ws.add("111"); // TypeError: Invalid value used in weak set
// ws.add(null); //TypeError: Invalid value used in weak set
ws.add(function(){});
ws.add(arr2);
ws.add(obj);

arr = null;

console.log(ws);
console.log(ws.has(arr), ws.has(arr2));