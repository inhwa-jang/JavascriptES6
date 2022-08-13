/*
<Destruncturing(디스트럭처링)>
- 구조화된 배열 또는 객체를 Desctructuring(비구조화,파괴)하여 개별적인 변수에 할당하는 것이다.
- 배열 또는 객체 리터럴에서 필요한 값만을 추출하여 변수에 할당하거나 반환할때 유용하다.

<Array Destructuring>
- 배열 디스트럭처링은 배열의 각 요소를 배열로부터 추출하여 변수 리스트에 할당한다.
- 이 때 추출/할당 기준은 배열의 인덱스이다.
 */

let arr = [1,2,3];
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// console.log(one, two, three);

let [one, two, three] = arr;
// console.log(one, two, three);

/*
- 배열 디스트럭처링을 위해서는 할당 연산자 왼쪽에 배열 형태의 변수 리스트가 필요하다.
- 배열 디스트럭처링은 배열에서 필요한 요소만 추출하여 변수에 할당하고 싶은 경우에 유용하다.
*/

let x, y, z;

[x, y] = [1, 2];
console.log(x,y); // 1, 2

[x, y] = [1];
console.log(x,y); // 1, undefined

[x, y] = [1, 2, 3];
console.log(x,y); // 1, 2

[x, , z] = [1,2,3];
console.log(x,z); // 1, 3

// 기본값
[x, y, z = 3] = [1, 2];
console.log(x, y, z); // 1, 2, 3

[x, y = 10, z = 3] = [1, 2];
console.log(x, y, z); // 1, 2, 3

// spread operator
[x, ...y] = [1,2,3];
console.log(x, y); // 1 [2, 3]

// Date 객체에서 년도, 월, 일을 추출하기
const today = new Date(); 
const formattedDate = today.toISOString().substring(0,10); // "2022-08-12"
const[year, month, day] = formattedDate.split('-');
console.log([year,month,day]); // 배열로 반환