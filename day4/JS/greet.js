// 2초 간격으로 인사말이 변경될 것
// 콜백함수 기능 - 자기가 부르는 재귀적 용법
// 배열의 인덱스가 1증가하면 인사말이 바뀜

let message = ["오늘도 좋은 하루!!", "행운을 빌어요!", "잘 지내니?"];

let msgIdx = 0;

myGreeting(); // 함수 호출


function myGreeting() {
    let msg = document.getElementById("demo");
    msg.innerHTML = message[msgIdx];
    msg.style.color = "#99f"
    msgIdx++; // 1증가
    if(msgIdx == 3){
        msgIdx = 0;  // 인덱스 번호 제한
    }
    setTimeout(myGreeting, 2000);  // myGeeting() 호출 = 콜백
}
