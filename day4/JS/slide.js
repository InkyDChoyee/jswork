// 이미지 슬라이드
window.onload = function(){

    let picture = ["img/cup-1.jpg", "Img/cup-2.jpg", "Img/cup-3.jpg"];
    let picIdx = 0;

    showSlide();

    function showSlide() {
        let cupPic = document.getElementById("pic")
        cupPic.src = picture[picIdx];  // img 경로의 경우 -> src를 쓴다
        picIdx++;
        if(picIdx == picture.length){
            picIdx = 0;
        }
        setTimeout(showSlide, 2500);
    }
}