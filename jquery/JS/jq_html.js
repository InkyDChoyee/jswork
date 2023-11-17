$(function(){   //(document).ready() 생략 가능
    // $(".add").click(function(){
    //     $(".pic").html("<img src='images/coffee-blue.jpg' alt='공부'>");
    //     $(".pic").css({'padding-top' : '50px'});
    // });

    $(".add").css({'text-decoration':'none', 'color':'#000'});
    // on() = 선택한 요소에 대해 이벤트 핸들러를 연결
    
    $(".add").on('mouseover', function(){
        $(".pic").html("<img src='images/coffee-blue.jpg' alt='공부'>");
        $(".pic").css({'padding-top' : '50px', 'display':'block'});
    });

    $(".add").on('mouseout', function(){
        $(".pic").css({'display' : 'none'});
    });
});