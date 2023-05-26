let age = Number(prompt("Nhập số tuổi"));
// console.log(Number.isInteger(age))
if (Number.isInteger(age) ==true ) {
    if (age > 0 && age < 120) {
    alert("Tuổi: " + age);
}
else {
    alert("Nhập lại tuổi");
}
}
else {
        alert("Nhập lại tuổi");
    }


