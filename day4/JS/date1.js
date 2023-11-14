// Date 객체(날짜와 시간)
const now = new Date();

document.write("현재 년도: " + now.getFullYear() + "<br>");
document.write("현재 월: " + (now.getMonth() + 1) + "<br>"); // 배열로 가져오기 때문에 +1을 해주어야 한다
document.write("현재 일: " + (now.getDate() + "<br>"));
document.write("현재 시: " + (now.getHours() + "<br>"));
document.write("현재 분: " + (now.getMinutes() + "<br>"));
document.write("현재 초: " + (now.getSeconds() + "<br>"));

// 현재까지의 시간 측정(1970. 1. 1. 자정부터 밀리초로 반환)
document.write("현재 까지의 시간: " + now.getTime()/1000 + "시간 <br>");
document.write("현재 까지의 날짜(일): " + Math.floor(now.getTime()/(24 * 60 * 60 * 1000)) + "일 <br>");
