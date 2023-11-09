// fee.js

// 나이에 따른 놀이공원 입장료 계산
let age = prompt("나이를 입력하세요", "8");
let fee = 0;
let lvl = "";

if(age >= 1 && age < 8) {
    lvl = "취학 전 아동"
    fee = 1000;
} else if(age >= 8 && age < 14) {
    lvl = "초등학생"
    fee = 2000;
} else if(age >= 14 && age < 20) {
    lvl = "청소년"
    fee = 5000;
} else if(age >= 20 && age < 66) {
    lvl = "성인"
    fee = 10000;
} else {
    lvl = "시니어"
    fee = 5000;
}
document.write("<span class='lvl'>" + lvl + "</span>입니다<br>")
document.write("입장료는 <span class='accent'>" + fee + "</span>원 입니다")
