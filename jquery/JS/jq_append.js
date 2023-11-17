$(document).ready(function(){
    $("#name").css({'background' : '#9f9'});
    // append(태그) = 선택한 요소의 끝에 새요소 추가
    $(".info").append("<p>만나서 반가워요~</p>");
    $(".info").append("<img src='images/doit.jpg' alt='공부'>");
    // next() = 선택된 태그 바로 옆으로 들어감
    $(".info p").next().text("만나서 반가워요~");
    // html(태그) = 부모요소의 하위 요소를 생성함
    $(".pic").html("<img src='images/coffee-blue.jpg' alt='공부'>");
});