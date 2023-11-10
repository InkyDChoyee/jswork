// return이 있는 함수

// 제곱수를 계산하는 함수
// 어떤 수를 입력받아 제곱하는 함수
// function square(x) {
//     let num = x*x;
//     return num;   // 변수 return
// }
let square = function(x) {
    let num = x*x;
    return num;
}

console.log(square(5));

let add = function(a,b) {
    return a+b;   // 구문 return
}

console.log(add(4,5));

result = add(4,5);
console.log(result);