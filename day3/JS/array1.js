// 배열 사용
let animal = [];  // 빈 배열 생성
console.log(animal);
console.log(animal.length + "개");

// 입력(저장)
animal[0] = 'cow';
animal[1] = 'pig';
animal[2] = 'dog';
animal[3] = 'cat';

// 특정 요소(값)을 조회(출력)
console.log(animal[1]);

// 수정(변경)
animal[2] = 'hamster';

// 삭제
delete animal[1];  // delete = 값은 삭제, 공간은 남아있다

// 전체 요소(값) 조회(목록)
// 0번 인덱스부터 시작하고, 배열의 길이 미만일 것
for(var i = 0; i < animal.length; i++){
    document.write(animal[i] + " ");
}

