$(function(){
    //val()
    // $(selector).val() = 값 속성 반환
    // $(selector).val(value) = 값 속성 설정
    $("button").on('click', function(){
        let text = $("#t_input").val();
        $("#t_output").val(text);
    });
})