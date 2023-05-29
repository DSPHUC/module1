let numbers = [5, 7, 9, 1, 3, 15, 9, 10, 11, 15];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
        max = numbers[i];
    }
}
console.log(max);