let count = 1;
let i = 0;
let fibonacciFirst=0;
for (let fibonacci = 1; count <= 20; count++) {
    document.write('</br>' + count + " " + fibonacci);
    i = fibonacciFirst;  
    fibonacciFirst=fibonacci;
    fibonacci=fibonacci+i;
}

