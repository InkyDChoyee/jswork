// if_else.js

// 단독 if문
// if ~ else문

// 속도 위반 판정 프로그램
let limit_speed = prompt("속도 입력", "50");

// if(limit_speed >= 50) {
//     document.write("안전속도 위반! 과태료 10만원 부과 대상<br>");
// }
// document.write("<br>시속 " + limit_speed + "km입니다");

if(limit_speed == null) {
    document.write("입력이 취소되었습니다");
} else {
    if(limit_speed >= 50) {
        document.write("안전속도 위반! 과태료 10만원 부과 대상<br>");
    }else {
        document.write("안전속도 준수!<br>");
    }
    document.write("<br>시속 " + limit_speed + "km입니다");
}
