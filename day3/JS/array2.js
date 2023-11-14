// Array 객체를 사용한 배열
let num = new Array();  // 빈 배열 생성
console.log(num);

num[0] = 10;
num[1] = 20;
num[2] = 30;
console.log(num);
console.log(num.length + "ea");

// 특정 요소 1개 조회
console.log(num[0]);

// 전체 요소 조회
for(var i = 0; i < num.length; i++){
    console.log(num[i]);
}

for(let n in num){
    document.write(num[n] + " ");
}

// 연산
console.log(num[1] - num[2]);
console.log(num[1] <= num[2]);

// 합계, 평균
let sum = 0;
let avg = 0;
for(var i = 0; i < num.length; i++){
    sum += num[i];   // 누적 합계
}
avg = sum / num.length;  // 평균

console.log("합계 = " + sum);
console.log("평균 = " + avg);