let n = prompt(" Nhập số lượng số nguyên vào mảng: ");
let integers = [];
for (i = 0; i < n; i++) {
    integers[i] = Math.floor(Math.random() * 101)

}
let newIntegers = [];
for (i = 0; i < n; i++) {
    newIntegers[i] = integers[integers.length - 1 - i];
}
console.log(integers);
console.log(newIntegers);