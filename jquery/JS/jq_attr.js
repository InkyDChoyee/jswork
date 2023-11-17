$(function(){
    //attr()함수 = 개체의 속성을 변경할 수 있음
    $(".big").on('click', function(){
        $("img").attr({'width': '450px'})
    })
    
    $(".origin").on('click', function(){
        $("img").attr({'width': '350px'})
    })

    $(".small").on('click', function(){
        $("img").attr({'width': '250px'})
    })
})