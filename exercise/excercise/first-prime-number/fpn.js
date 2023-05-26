let numbers = Number(prompt("Nhập số lượng số nguyên tố: "));
let count = 1; //số lượng số nguyên tố từ numbers
for (let N = 2; N >= 2; N++) {
    if (checkPrime(N)) {
        document.write(` stt  ${count}:${N} </br>`);
        count++;
        if (count == numbers + 1) {
            break;
        }

    }
}
function checkPrime(number) {
    let check = true;
    if (number == 2) {
        check = true;
    }
    else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                check = false;
                return check;
            }
        }
    }
    return check;
}
