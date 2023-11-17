// 시계 생성
setInterval(myWatch, 1000);

function myWatch() {
    const now = new Date(); // 날짜와 시간 함께 생성
    let time = now.toLocaleTimeString(); // 시간만 출력
    console.log(time);

    let watch = document.getElementById("show")
    if(now.getHours() <= 12){
        watch.innerHTML = time.
    }else {
        watch.innerHTML = time.
    }
    watch.style.color = "#99f";
}
