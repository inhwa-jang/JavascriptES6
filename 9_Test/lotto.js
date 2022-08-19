/*
<Destructuring & Set 활용해서 lotto 번호 만들기>
- 유일한 값을 추출하는 과정에서 Set을 사용한다
- getRandomNumber함수에 변수를 전달하는 과정에서 destructuring을 사용해본다
 */

// 기본 셋팅 요소 name, count, maxNumber
const SETTING = {
  name : "Lucky Lotto!",
  count : 6,
  maxNumber : 45
}

// Object Destructuring
const {count, maxNumber} = SETTING;

// lotto배열 Set객체 생성
const lottoNum = new Set();

// 랜덤한 숫자 배열 반환할 result 변수 선언
let result;

// maxNumber를 인자로 받아 랜덤한 숫자를 반환할 함수 getRandomNumber 생성
function getRandomNumber(maxNumber){
  while(lottoNum.size < count){ // Set.prototype.size : set객체의 원소 수  반환
    let number = Math.floor(Math.random()*maxNumber + 1); // 랜덤 숫자 반환
    lottoNum.add(number); // 랜덤 숫자들 set원소로 추가
  }
  result = Array.from(lottoNum); // Arram.from() : 유사 배열 객체나 반복 가능한 객체를 복사해 새로운 Array 생성
  return console.log(result);
}

getRandomNumber(maxNumber);
