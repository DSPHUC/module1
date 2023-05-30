let integers = [];
let number;
let count=0;
for (let i = 0; i < 10; i++) {
    do {
        number = Math.floor(Math.random() * 101);
    }
    while (integers.includes(number))
    integers.push(number);
}
let max = integers[0];
for (let i = 1; i <= integers.length; i++) {
    if (max < integers[i]) {
        max = integers[i];
        count=i;
    }
}
console.log(integers );
console.log(count);
console.log(max);
document.write(max);
