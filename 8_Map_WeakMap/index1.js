/*
Array -> Set & WeakSet
Object -> Map & WeakMap

<Map>
- map은 key와 value를 가지는 구조이다. key는 중복될 수 없다.
- key로 사용 가능한 data type : any value
  (String, number, sysmbol, object, function, boolean ...)

<WeakMap>
- key는 반드시 object여야 한다.
- literation, keys(), values(), entries() method를 지원하지 않기 때문에
  key나 value 전체를 얻는 것이 불가능하다.
- key로 사용된 object를 참조하는 것이 아무것도 없다면,
  object는 메모리와 WeakMap에서 자동으로 삭제된다.
- 복잡한 데이터를 저장할 때 사용하기 좋다.
  */
let wm = new WeakMap();
let myfun = function() {};
// 이 함수가 얼마나 실행됐지? 를 알려고 할때

wm.set(myfun,0);

// console.log(wm);

let count = 0;
for(let i=0; i<10; i++){
  count = wm.get(myfun); // get value
  count++;
  wm.set(myfun, count);
}

console.log(wm.get(myfun));
myfun = null;
console.log(wm.has(myfun));