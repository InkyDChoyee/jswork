$(document).ready(function(){
    // each() = 일치하는 각 요소에 대해 실행할 함수를 지정합니다
    $("button").on('click', function(){
        // index는 0번부터 시작
        $("li").each(function(index, element){
            alert(index+1 + " : " + $(this).text());
            console.log(index + " : " + $(this).text());  // li의 내용을 text()로
        })
    })
})