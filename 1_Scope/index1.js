let list = document.querySelectorAll("li");
    for(let i = 0; list.length; i++) {
      list[i].addEventListener("click", function () {
        console.log(i + "번째 리스트 입니다");
      });
    }