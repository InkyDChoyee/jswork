$(function(){
    //$("p").addClass("text") = p태그에 
    // text 라는 이름의 클래스를 생성
    $("#btn1").on('click',function(){
        $("p").addClass("text");
    })
    $("#btn2").on('click',function(){
        $("p").removeClass("text");
    })
    $("#btn3").on('click',function(){
        $("p").toggleClass("text");
    })
})