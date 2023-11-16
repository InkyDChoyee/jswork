window.onload = function(){
    // 스크롤 했을 때 y좌표값을 알아내서
    // 좌표값이 200 이상이면 backword 애니메이션 적용
    // 미만인 경우에는 forward 애니메이션 적용
    let text = document.querySelector("h1");

    // 이벤트 함수 사용
    window.addEventListener('scroll', function(){
        let value = this.window.scrollY;
        console.log('scrollY', value);

        if(value > 150){
            text.style.animation = "backword 1s ease-out";           
        }else {
            text.style.animation = "forward 1s ease-out";
        }
    });
}