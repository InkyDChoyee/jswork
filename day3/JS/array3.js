// 1 ~ 10 자연수 배열에 저장
let number = new Array(10);
console.log(number.length);

// 저장
// number[0] = 1;
// number[1] = 2;
// number[2] = 3;

for(var i = 0; i < number.length; i++){
    number[i] = (i+1);
}

// 출력
for(let num in number){
    document.write(number[num] + " ");
}

// 알파벳 대문자를 저장 - 26개
let alphabet = new Array(26);
// 문자셋 - 아스키코드(128개) 'A' = 65
// 코드 값으로 저장 출력

// 변수.charCodeAt(); = 아스키코드 값으로 변환해주는 함수
// String.fromCharCode(변수); = 아스키코드 값을 문자로 변환해주는 함수

let ch = 'A';
console.log(ch.charCodeAt(0));

ch = ch.charCodeAt(0);

// 저장
for(let i = 0; i < alphabet.length; i++){
    alphabet[i] = ch;
    ch++;
    console.log(alphabet[i]);    
}

// 출력
for(let i = 0; i < alphabet.length; i++){
    console.log(alphabet[i] + ", " + String.fromCharCode(alphabet[i]));
}