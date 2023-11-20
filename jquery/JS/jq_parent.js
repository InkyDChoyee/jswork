$(function(){
    $("span").css("color", "#d51")
    
    // 태그의 부모 요소
    $("span").parent().css({"color":"#f55", 
                            "font-weight":"bold",
                            "border":"2px solid #55f"})
    
    // 태그의 부모요소의 다음 요소
    $("span").parent().next().css({"color":"#f55", 
                            "font-weight":"bold",
                            "border":"2px solid #5f5"})
    
    // ul의 자식요소
    $("ul").children().css({"color":"#f9f"})

    //ul 하위의 span태그 찾기
    $("ul").find("span").css({"color":"#000"})
})