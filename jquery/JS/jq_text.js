$(document).ready(function(){
    msg1();   // 함수 호출
    msg2();
});

function msg1(){
    alert("문서 로드 후 자동으로 알림창을 표시합니다");
}

function msg2(){
    $("#id1").click(function(){
        $("#id2").text("메시지가 변경되었습니다");
        $("#id2").css({'background' : '#f99'});
    })
}