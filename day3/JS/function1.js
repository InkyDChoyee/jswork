// 함수 정의
// 매개 변수(입력)가 없는 함수
function sayHello() {
    document.write("안녕하세요~ <br>");
}

// 매개 변수(입력)가 있는 함수
// 매개 변수에는 자료형이 생략된다
function sayHello2(name){
    document.write(name + "님 안녕하세요! <br>");
}

// 구구단을 출력하는 함수 정의
function gugudan(dan){
    for(var i = 1; i < 10; i++){
        // dan = parseInt(dan);
        document.write(dan + " X " + i + " = " + (dan * i) + "<br>");
    }
}


// 함수 사용 - 호출
sayHello();
sayHello2("이순신");
gugudan(4);

