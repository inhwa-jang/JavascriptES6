// this context of Arrow Function

// const myObj = {
//   runTimeout() {
//     setTimeout(() => {
//       this.printData();
//     }, 200);
//   },

//   // 위 setTimeout 함수의 내부 콜백함수가 화살표 함수가 아닐 경우
//   // printData()함수를 실행시키려면 this를 인자로 받는 bind() 메서드로 호출시켜줘야 하지만
//   // 화살표 함수로 바꿔주면 bind()메서드를 생략해주어도 실행되어진다

//   printData() {
//     console.log("hi code!!!");
//   }
// }

// myObj.runTimeout();

// -------------------------------

const el = document.querySelector("p");

const myObj = {
  register() {
    el.addEventListener("click", (evt) => {
      this.printData(evt.target);
    });
  },

  printData() {
    console.log('clicked!', el.innerText);
  }
}

myObj.register();
