let x;
for (let n = 1; n <= 100; n++) {
    if (n % 3 == 0) {
        document.write("Fizz" + `</br>`);
    }
    else if (n % 5 == 0) {
        document.write("Buzz" + `</br>`);
    }
    else if (n % 15 == 0) {
        document.write("FizzBuzz" + `</br>`);
    }
    else {
        document.write(n + `</br>`);
    }

}