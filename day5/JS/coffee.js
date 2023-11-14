let bigPic = document.querySelector("#big-pic")
let samllPics = document.querySelectorAll(".small");

// 실행 함수
for(let i = 0; i < samllPics.length; i++){
    samllPics[i].onclick = function(){
        bigPic.setAttribute("src", this.src);
    };
}