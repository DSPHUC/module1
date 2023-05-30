let array = [];
let n = prompt("Nhập số ngẫu nhiên");
let count = 0;
for (i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 11)
    if (n == array[i]) {
        array.splice(i, 1);
        array.push('0');
    }
}
console.log(array);