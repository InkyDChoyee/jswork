// 조건 : 현재연도 = 상수로 선언
// 나이 = 현재연도 - 태어난해

function calcAge(){
    const currentYear = 2023;
    let age = 0;
    let birthYear = prompt("태어난 연도를 입력하세요(YYYY)", "1999");
    // 예외처리
    if(birthYear == null) {
        document.getElementById("print").innerHTML = ("입력이 취소되었습니다");
    }else if(isNaN(birthYear)){
        document.getElementById("print").innerHTML = ("숫자를 입력해주세요");
    }else {
        age = currentYear - birthYear;
        document.getElementById("print").innerHTML = ("<span class='current'>" + currentYear + "</span>년 현재<br>" +"<span class='birth'>" + birthYear + "</span>년에 태어난 사람의 나이는 <span class='age'>" + age + "</span>세 입니다");
    }
}