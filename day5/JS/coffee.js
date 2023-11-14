let bigPic = document.querySelector("#big-pic")
let samllPics = document.querySelectorAll(".small");

// 실행 함수
for(let i = 0; i < samllPics.length; i++){
    samllPics[i].onclick = function(){
        bigPic.setAttribute("src", this.src);
    };
}

// 상세 설명 보이기/숨기기(토글 구현)
let sw = true;
let detail = document.querySelector("#detail");
let view = document.querySelector("#view"); // 상세설명 보기

// 객체의 onclick 속성을 사용하여 구현
view.onclick = function() {  // 이름없는 실행 함수
    if(sw) {
        detail.style.display = "block";
        view.innerText = "상세 설명 닫기"
        sw = false; // 상태 변경
    }else {
        detail.style.display = "none";
        view.innerText = "상세 설명 보기"
        sw = true; // 상태 변경
    }
}
