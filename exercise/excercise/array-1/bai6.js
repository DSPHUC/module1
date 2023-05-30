let array = [];
let n = prompt("Nhập số ngẫu nhiên");
let count = 0;
for (i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 101)
    if (n == array[i]) {
        count += 1;
    }
}
if (count > 0){
    alert(n+ ' is in the array');
}
alert(n+ ' is  not in the array');