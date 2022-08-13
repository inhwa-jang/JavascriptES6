// const name = 'crong';
// const age = 3;;

// const obj = {
//   name : name,
//   age : age,
// }

// console.log(obj);

// 간단히 객체 생성하기
function getObj() {
  const name = "crong";
  const getName = function() {
    return name;
  }

  const setName = function(newname){
    name = newname;
  }

  const printName = function() {
    console.log(name);
  }

  return {getName ,setName, name}
}

let obj = getObj();
console.log(obj.getName());