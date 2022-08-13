/*
ES5에서 객체의 각 프로퍼티를 객체로부터 디스트럭처링하여 변수에 할당하기 위해서는
프로터피 이름(키)을 사용해야 한다.
*/
var obj = {
  firstName: 'Tan',
  lastName: 'Kang'
}

var firstName = obj.firstName;
var lastName = obj.lastName;

console.log(firstName, lastName); // Tan Kang

/*
ES6의 객체 디스트럭처링은 객체의 각 프로퍼티를 객체로부터 추출하여 변수 리스트에 할당한다.
이때 할당 기준은 프로퍼티(키)이다.
*/
let obj2 = {
  name : "Kang",
  adress : "Busan",
  age : 20
}

let {name: myName, age:myAge} = obj2;
console.log(myName, myAge); // Kang 20