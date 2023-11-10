// 중첩 for문

// 5행 5열에 문자 출력
for(var i = 1; i <= 5; i++){
    for(var j = 1; j <= 5; j++){
        document.write("$");
    }
    document.write("<br>");
}

document.write("<br><br><br><br>");

// 구구단 출력
for(var i = 1; i < 10; i++){
    document.write(i + "단<br>")
    for(var j = 1; j < 10; j++){
        console.log(i + "단 : " + i + " X " + j + " = " + (i*j));
        document.write(i + " X " + j + " = " + (i*j) + "<br>");
    }
    document.write("<br><br>");
}

document.write("<br><br><br><br>");

// 직각 삼각형 모양으로 출력
for(var i = 1; i <= 5; i++){
    for(var j = 1; j <= i; j++){
        document.write("$");
    }
    document.write("<br>");
}

// document.write("<br>");

// for(var i = 1; i <= 5; i++){
//     for(var j = 1; j <= 6-i; j++){
//         document.write("$");
//     }
//     document.write("<br>");
// }

document.write("<br>");

for(var i = 1; i <= 5; i++){
    for(var j = 5; j >= i; j--){
        document.write("$");
    }
    document.write("<br>");
}

document.write("<br>");

for(let i = 0; i<4; i++){
    for(let j = 1; j <= 5; j++){
        document.write(5 * i + j);
    }
    document.write("<br>");
}