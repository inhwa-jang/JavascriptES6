function home() {
  let homename = "my home";
  // const homename = "my home"; // 변수 homename의 값을 변경하고 싶지 않을 때 const(상수) 키워드를 사용한다.
  homename = "your home";
  console.log(homename); 
  // const 를 기본으로 사용하지만,
  // 변경이 될 수 있는 변수는 let을 사용한다.
  // var는 사용하지 않는다.
}

home();