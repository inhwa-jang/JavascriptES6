// ES2015에 나온 새로운 String 메서드

let str = "hello world! ^^ ~~";
let matchstr = "^ ~~";

// console.log(str.startsWith(matchstr)); 
// startsWith() 메서드
// 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환한다.

// console.log(str.endsWith(matchstr));
// endsWith() 메서드
// 어떤 문자열에서 특정 문자열로 끝나는지를 확인할 수 있으며, 그 결과를 true 혹은 false로 반환한다.

console.log(str.includes("world"));
// includes() 메서드
//하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 true 또는 false 로 반환한다.