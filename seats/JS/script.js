// 고객의 수 : 20
// 좌석 열 : 5
// 좌석 줄 : 4
// 나머지가 없는 경우 : 줄수 = 고객 / 열
// 나머지가 있는 경우 : 줄수 = 고객 / 열 + 1

let customer, colNum, rowNum;

customer = prompt("입장객 수 입력: ");
colNum = prompt("좌석 열 수 입력: ");

if(customer % colNum != 0){
    rowNum = parseInt(customer / colNum) + 1;
}
if(customer % colNum == 0){
    rowNum = customer / colNum;
}


document.write("<table>")
for(let i = 0; i < rowNum; i++){
    document.write("<tr>")
    for(let j = 1; j <= colNum; j++){
        let seatNum = (colNum * i + j);
        document.write("<td>좌석" + seatNum +"</td>");
        if(seatNum >= customer){
            break;
        }
    }
    document.write("</tr>")
}
document.write("</table>");