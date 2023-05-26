let a = prompt("Nhập cạnh a");
let b = prompt("Nhập cạnh b");
let c = prompt("Nhập cạnh c");


switch (a < 0 || b < 0 || c < 0 || (a + b) < c || (b + c) < a || (a + c) < b ? 0 :1) {
    case 0:

    alert("không phải là tam giác");
    break;
    default: alert(" là một hình tam giác");
    break;
}