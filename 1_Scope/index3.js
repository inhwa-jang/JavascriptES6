function home() {
  const list = ["apple", "orange", "watermelon"];
  list.push("banana"); 
  console.log(list);
  // const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.
  // list 배열에 banana가 추가되어 출력된다.
}
home();

// immutable(불변성)) array는 어떻게 만들까?
const list = ["apple", "orange", "watermelon"];
list2 = [].concat(list, "banana");
console.log(list, list2);
console.log(list == list2); // false => list와 list2는 다르다. 새로운 객체를 만들어내는 것.

// immutable(불변성)을 지키면 좋은 점?
// => 무분별한 상태의 변경을 막는다. 
// => 상태의 변경을 추적하기가 쉽다.

