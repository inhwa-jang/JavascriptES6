const data = [
  {
    name : 'coffe-bean',
    order : true,
    items : ['americano', 'latte', 'green-tea']
  },
  {
    name : 'starbucks',
    order : false,
  },
  {
    name : 'twosome-place',
    order : true,
    items : ['americano', 'gnawa-tea', 'choco-latte']
  },
]

// Tagged template literals
function fn(tags, name, items) { // 첫번째 매개변수 tags는 순수 문자열을 배열로 저장한다
  
  // items가 undefined인지 확인
  if(typeof items === "undefined"){
    items = "<span style='color: salmon'>주문 가능한 상품이 없습니다</span>";
  } 
  return (tags[0] + name + tags[1] + items + tags[2]);
}

data.forEach((v) => {
const template = fn`<div><h1>안녕하세요 ${v.name} 입니다!!</h1></div>
<h2>주문 가능 목록</h2>
<div><span style='color: skyblue'>${v.items}</span></div>`;

document.querySelector("#message").innerHTML += template;
});