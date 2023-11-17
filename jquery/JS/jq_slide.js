$(function(){
    // slideUp(), slideDown()
    $(".up").on('click', function(){
        $("p").slideUp();
        $("img").slideUp();
    })
    $(".down").on('click', function(){
        $("p").slideDown();
        $("img").slideDown();

    })
    $(".toggle").on('click', function(){
        $("p").slideToggle();
        $("img").slideToggle();
    })
})