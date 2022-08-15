document.querySelector("div").addEventListener("click", function({type,target}){
  console.log(type, target.innerText); // click, 더미텍스트 출력
});