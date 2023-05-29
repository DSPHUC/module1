let count = 1;
let i = 0;
let fibonacciFirst = 0;
let sum = 0;
for (let fibonacci = 1; count <= 20; count++) {

    i = fibonacciFirst;
    fibonacciFirst = fibonacci;
    fibonacci = fibonacci + i;
    sum += fibonacci;
}

document.write(sum);