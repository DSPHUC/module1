let tax = prompt("Nhập tiền thu nhập");
let money = 0;
switch (tax < 0 ? 1 : tax > 0 && tax <= 5 ? 1 : tax > 5 && tax <= 10 ? 2 :
    tax > 10 && tax <= 18 ? 3 : tax > 18 && tax <= 32 ? 4 :
        tax > 32 && tax <= 52 ? 5 : tax > 52 && tax <= 80 ? 6 : 7) {
    case 0: alert("Nhập lại tiền");
        break;
    case 1: money = tax * 5 / 100;
        alert("thuế: " + money + " triệu");
        break;
    case 2: money = 5 * 5 / 100 + (tax - 5) * 10 / 100;
        alert("thuế: " + money + " triệu");
        break;
    case 3: money = 5 * 5 / 100 + 5 * 10 / 100 + (tax - 10) * 15 / 100;
        alert("thuế: " + money + " triệu");
        break;
    case 4: money = 5 * 5 / 100 + 5 * 10 / 100 + 8 * 15 / 100 + (tax - 18) * 20 / 100;
        alert("thuế: " + money + " triệu");
        break;
    case 5: money = 5 * 5 / 100 + 5 * 10 / 100 + 8 * 15 / 100 + 14 * 20 / 100 + (tax - 32) * 25 / 100;
        alert("thuế: " + money + " triệu");
        break;
    case 6: money = 5 * 5 / 100 + 5 * 10 / 100 + 8 * 15 / 100 + 14 * 20 / 100 + 20 * 25 / 100 + (tax - 52) * 30 / 100;
        alert("thuế: " + money + " triệu");
        break;
    default: 5 * 5 / 100 + 5 * 10 / 100 + 8 * 15 / 100 + 14 * 20 / 100 + 20 * 25 / 100 + 28 * 30 / 100 + (tax - 80) * 35 / 100;
        alert("thuế: " + money + " triệu");
        break;

}