$(document).ready(function(){
    // 함수 인자 = .css("속성, "속성값");
    // 객체표기법 = .css({'color : 'yellow', 'font-size' : '1.2rem'})
    $("body").css('background-color', 'skyblue');
    $("#demo").css({'color':'yellow', 'font-size' : '1.3em'});
    $(".list").css({'list-style':'square'});
    $(".list > li").css({'margin':'10px'});
})