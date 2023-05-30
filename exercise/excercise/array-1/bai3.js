let n = prompt(" Nhập số lượng số nguyên vào mảng: ");
let integers = [];
let max = integers[0];
let sum = 0;
let avg = 0;
for (i = 0; i < n; i++) {
    integers[i] = Math.floor(Math.random() * 101)
    sum += integers[i];
}
console.log(sum/n);
for (let i = 0; i < integers.length; i++) {
    if (max < integers[i + 1]) {
        max = integers[i + 1];
    }

}