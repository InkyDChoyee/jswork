// 버튼을 클릭할 때 호출
let text = document.getElementById("detail");
let showBtn = document.getElementById("show");

function showText() {
    // 텍스트는 보이고 보이기 버튼은 숨기기
    text.style.display = "block";
    showBtn.style.display = "none";
}

function hideText() {
    // 텍스트는 숨기고 보이기 버튼은 보이기
    text.style.display = "none";
    showBtn.style.display = "block";
}
