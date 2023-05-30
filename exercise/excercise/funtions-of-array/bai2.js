let number = prompt();
let numString = number.toString();
let number2 = [numString[0]];
for (let i = 0; i <= number.length; i++) {
    if ((number[i ] % 2 == 0) && (number[i+1] % 2 == 0)) {
        number2.push("-", number[i+1]);
    }
    else {
        number2.push(number[i+1]);
    }
}
console.log(number2.join(''));