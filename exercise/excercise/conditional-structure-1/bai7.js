let times = prompt("Nhập số phút đã gọi");
let money = 0;
switch (times >= 0 && times < 50 ? 1 : times >= 50 && times < 200 ? 2 : times >= 200 ? 3 : 4) {
    case 1: money = times * 600 + 25000;
        alert("số tiền phải trả là " + money);
        break;
    case 2: money = 50 * 600 + (times - 50) * 400 + 25000;
        alert("số tiền phải trả là " + money);
        break;
    case 3: money = 50 * 600 + 150 * 400 + (time - 200) * 200 + 25000;
        alert("số tiền phải trả là " + money);
        break;
    case 4:
        alert("nhập lại " );
        break;
}