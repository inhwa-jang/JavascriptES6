/*
  <template 템플릿>
  - HTML 요소를 동적으로 만들어서 페이지에 추가하는 것
  - 데이터 + HTML 문자열의 결합이 필요하기 때문
  - json으로부터 응답을 받고 jacascript object로 변환 후에 어떠한
    데이터처리 조작을 한 후에 dom에 추가한다
  - 백틱(`)기호를 사용하여 정의
*/

const data = [
  {
    name : 'coffe-bean',
    order : true,
    items : ['americano', 'latte', 'green-tea']
  },
  {
    name : 'starbucks',
    order : false,
  }
]

const template = `<div>welcome ${data[0].name}!!</div>`;
console.log(template);