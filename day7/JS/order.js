// 체크박스 선택 객체
let check = document.getElementById("shippingInfo");

// 주문 정보
let billingName = document.getElementById("billingName");
let billingTel = document.getElementById("billingTel");
let billingAddr = document.getElementById("billingAddr");

// 배송정보
let shippingName = document.getElementById("shippingName");
let shippingTel = document.getElementById("shippingTel");
let shippingAddr = document.getElementById("shippingAddr");

check.addEventListener('click', function(){
    if(check.checked == true){
        shippingName.value = billingName.value;
        shippingTel.value = billingTel.value;
        shippingAddr.value = billingAddr.value;
    }else {
        shippingName.value = "";
        shippingTel.value = "";
        shippingAddr.value = "";
    }
})