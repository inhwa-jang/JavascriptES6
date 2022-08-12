function print() { 
  /*
  filter, includes, from을 사용해서 문자열 'e'가 포함된 
  노드로 구성된 배열을 만들어서 반환하기
  */

  let list = document.querySelectorAll("li");
  let listArray = Array.from(list); // li노드로 구성된 배열
  // console.log(toString.call(listArray)); 
  // => [object Array]

  let eArray = listArray.filter(function (v){
    return v.innerText.includes("e");
  });
  console.log(eArray);
}

print();
