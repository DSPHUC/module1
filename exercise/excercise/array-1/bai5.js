let n = prompt(" Nhập số lượng số nguyên vào mảng: ");
let integers = [];
let count = 0;
for (i = 0; i < n; i++) {
    let sign = Math.random() < 0.5 ? -1 : 1;
    integers[i] = Math.floor(Math.random() * 101 * sign)
    if (integers[i] < 0) {
        count += 1;
    }
}
console.log(count);
console.log(integers);