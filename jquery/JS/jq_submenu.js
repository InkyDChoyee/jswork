$(function(){
    $(".btn1 a").on("mouseover", function(){
        // 이벤트 대상 = <a> (= this)
        $(this).parent().next().css({"display":"block"});
        // = $(this).parent().next().show();

        $(".ul2").css({"display":"none"})
        // = $(this).parent().next().hide();
        
    });

    $(".btn2 a").on("mouseover", function(){
        // 이벤트 대상 = <a> (= this)
        $(this).parent().next().css({"display":"block"});
        // = $(this).parent().next().show();

        $(".ul1").css({"display":"none"})
        // = $(this).parent().next().hide();

    });

})