function add() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let number1 = parseFloat(num1);
    let number2 = parseFloat(num2);
    let Result;
    Result = number1 + number2;
    document.getElementById("Result").innerHTML = Result;
}
function sub() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let Result;
    Result = num1 - num2;
    document.getElementById("Result").innerHTML = Result;
}
function mult() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let Result;
    Result = num1 * num2;
    document.getElementById("Result").innerHTML = Result;
}
function divi() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let Result;

    Result = (num1 / num2).toFixed(2);
    document.getElementById("Result").innerHTML = Result;
}

