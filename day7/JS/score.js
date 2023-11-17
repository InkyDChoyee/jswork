// 학생 다섯명의 국어와 수학점수 통계
let score = [
    [80, 70],
    [90, 60],
    [70, 70],
    [100, 90],
    [83, 55]
]

let kor_sum = 0;
let math_sum = 0;
let kor_avg, math_avg;

// 과목별 점수 합계, 평균

//합계
for(let i = 0; i < score.length; i++){
    kor_sum += score[i][0];
    math_sum += score[i][1];
}
document.write("국어 점수 합계 : " + kor_sum + "<br>");
document.write("수학 점수 합계 : " + math_sum + "<br>");
document.write("<br>")
// 평균
kor_avg = kor_sum/score.length;
math_avg = math_sum/score.length;
document.write("국어 점수 평균 : " + kor_avg + "<br>");
document.write("수학 점수 평균 : " + math_avg + "<br>");


let sumArr = [0, 0];
for(let i = 0; i < sumArr.length; i++){
    for(let j = 0; j < score.length; j++){
        sumArr[i] += score[j][i];
    }
}
document.write(sumArr);
document.write("<br>")
let avgArr = [0.0,0.0];
for(let i = 0; i < sumArr.length; i++){
    avgArr[i] += sumArr[i] / score.length;
}
document.write(avgArr);

