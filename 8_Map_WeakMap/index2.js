// WeakMap 활용
// 클래스 인스턴스 변수 보호하기

// const wm = new WeakMap();
const obj = {};

function Area(height, width){
  // this.height = height;
  // this.width = width;

  // wm.set(this, {height, width});

  obj.width = width;
  obj.height = height;
}

Area.prototype.getArea = function() {
  // return this.height * this.width;
  // const {height, width} = wm.get(this);
  // return height * width;
  return obj.width * obj.height;
}

let myarea = new Area(10,20);
console.log(myarea.getArea());

/*
// console.log(myarea.height);
console.log(obj.has(myarea)); // true
myarea = null; // 삭제
console.log(obj.has(myarea)); // false
*/
