/*
<Destruncturing(디스트럭처링)>
- 구조화된 배열 또는 객체를 Desctructuring(비구조화,파괴)하여 개별적인 변수에 할당하는 것이다.
- 배열 또는 객체 리터럴에서 필요한 값만을 추출하여 변수에 할당하거나 반환할때 유용하다.

<JSON : JavaScript Object Notation>
- 네트워크를 통해 데이터를 주고받는데 자주 사용되는 경량의 데이터 형식
*/
let news = [
  {
    "title" : "sbs",
    "imgurl" : "https://n.news.naver.com/mnews/article/011/0004087527?sid=102",
    "newslist" : [
      "가나다라마바사",
      "아자차카파타하",
      "ABCDEFG"
    ]
  },
  {
    "title" : "mbc",
    "imgurl" : "https://n.news.naver.com/mnews/article/001/0013375511?sid=102",
    "newslist" : [
      "Lorem ipsum dolor sit amet consectetur",
      "adipisicing elit. Labore, exercitationem.",
      "Quam ut fugit laboriosam quo aut repellendus"
    ]
  }
]

/*
let [,mbc] = news;
console.log(mbc);
let {title, imgurl} = mbc;
console.log(title, imgurl);
*/

/*
let[, {title,imgurl}] = news;
console.log(imgurl);
*/

// Event 객체 전달
function getNewsList([{newslist}]) { // => 첫번째 newslist , => 두번째 newslist 출력 : [,{newslist}]
  console.log(newslist);
}

getNewsList(news);