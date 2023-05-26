let a = prompt("Nhập cạnh a");
let b = prompt("Nhập cạnh b");
let S = 0;
if (a > 0 & b > 0) {
    S = ((a * b) / 2)
    alert("Diện tích tam giác vuông " + S);
}
else {
    alert("Nhập lại cạnh a,b");
}