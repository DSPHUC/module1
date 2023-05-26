let moneyFirt=Number(prompt("Nhập số tiền ban đầu"));
let month=Number(prompt("Nhập số tháng gửi"));
let moneyLater=0;
    moneyLater=moneyFirt*(1+(10/100))**month;
    alert(moneyLater);