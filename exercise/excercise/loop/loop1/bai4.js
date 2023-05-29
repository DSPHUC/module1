let count = 1;
let i = 0;
let fibonacciFirst = 0;
let count1 = 0;
for (let fibonacci = 1; count <= 20; count++) {
    document.write('</br>' + count + " " + fibonacci);
    if (fibonacci % 5 == 0 && count1 == 0) {
        document.write(" đây là số đầu tiên fibonacci chia hết cho 5");
        count1++

    }
    i = fibonacciFirst;
    fibonacciFirst = fibonacci;
    fibonacci = fibonacci + i;
}

