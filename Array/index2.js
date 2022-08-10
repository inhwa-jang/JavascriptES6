// spread operator, 펼침연산자, 스프레드 연산자
// => 배열, 문자열, 객체 등 반복 가능한 객체 (Iterable Object)를 개별 요소로 풀어서 전개할 수 있다.
let pre = ["apple", "orange", 100];
let newData = [...pre];
// console.log(pre, newData);
// console.log(pre === newData);


let arr1 = [1,2,3,4,5];
let arr2 = [...arr1, 6,7,8,9];
// console.log(arr2);

function mul(x,y,z) {
  return x * y * z;
}

const arr = [1,3,5];

const result1 = mul.apply(null, arr);
// console.log(result1);

const result2 = mul(...arr);
// console.log(result2);

const obj1 = { name: "Jhon", age : '20', flag : 'true'};
const newObj = {...obj1, name: 'Alice'};
console.log(newObj);
console.log(obj1 === newObj);