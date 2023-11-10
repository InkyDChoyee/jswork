// 상수(Constant Variable)

let currentYear = 2023;
currentYear = 2022;
console.log(currentYear);

const MONTH = 12;
//MONTH = 13;  // => typeError 뜸
console.log("1년은 " + MONTH + "달이 있습니다");

// 원의 넓이 계산하기
// circleArea = PI * radius * radius
const PI = 3.14;
let radius = 5;
let circleArea;

//PI = 4.14; => 재할당 불가

// 연산
circleArea = PI * radius * radius;

// 출력
document.write(circleArea);

// 공의 속도를 반환하는 프로그램 작성
// km -> mile = 1mile = 1.609km
let kph, mph;
const RATE_KPH_MPH = 1.609;

// 입력
// kph = 145.3;
// kph = 150.1;
kph = parseFloat(prompt("구속(공의 속도)을 입력하세요(km/h)", "100"));

// 연산 : mile = km / 1.609;
mph = kph / RATE_KPH_MPH;
console.log(mph);

// 출력
document.write(kph + "km는 " + mph.toFixed(2) + "mile입니다");
