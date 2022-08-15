/*
<Set>
- 셋(Set)은 중복 되지 않는 값(value)들을 모아둔 컬렉션이다. 
- 키(key) : 값(value) 쌍이 아닌 키(key)가 없는 값이 저장된다. 
- 동일한 값(value)이 있다면 set.add(value)를 몇번을 해도 추가가 안된다.
- 중복없이 유일한 값을 저장하려고 할때. 이미 존재하는지 체크할 때 유용하다.
*/

let mySet = new Set();
// console.log(toString.call(mySet)); // [object Set]

// Set.prototype.add()
mySet.add("crong");
mySet.add("pororo");
mySet.add("crong"); // 중복값 빼고 출력

// delete operator
mySet.delete("crong");

/*
Set.prototype.has() 
has()메서드는 Set객체에 주어진 요소가 존재하는지 여부를 판별해 반환한다.
*/
console.log(mySet.has("crong"));

mySet.forEach(function(v){
  console.log(v);
})
