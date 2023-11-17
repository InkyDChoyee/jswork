$(function(){
    $(".accordion_box ol li").on('click', function(){
        $(".accordion_box ol li").removeClass("on");  // 상위 li에서 class 제거
        $(this).addClass("on");  // this = 클릭 된 대상
    })

})