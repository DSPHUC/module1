let a = Number(prompt("Nhập cạnh a"));
let b = Number(prompt("Nhập cạnh b"));
let S = 0;
if (a > 0 && b > 0) {
    S = a * b
    alert("Diện tích hình chữ nhật là: " + S);
}
else {
    alert("Nhập lại canh a,b");
}