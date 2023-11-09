// if_else.js

let num = 11;

// 조건 연산자 ( ?  :  ); = 짝수/홀수 판단
let result = (num % 3 === 0) ? "3의 배수이다" : "3의 배수가 아니다";
console.log(result);

// if ~ else 문
if(num % 3 === 0) {
    document.write("3의 배수입니다");
} else {
    document.write("3의 배수가 아닙니다");
}
