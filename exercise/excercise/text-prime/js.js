function isPrime(number) {
    let isPrime = false;
    let count = 0;
    if (number < 2) {
        alert(number + " không phải là số nguyên tố");
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                count += 1;
            }
        }
        if (count == 0) {
            isPrime = true
        }
    }
    if (isPrime) {
        alert(number + "  là số nguyên tố");
        
    } else {
        alert(number + " không phải là số nguyên tố");
    }
}
let number = prompt("Nhập số cần kiểm tra: ");
isPrime(number);