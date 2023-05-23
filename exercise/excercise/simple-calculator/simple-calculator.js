let num = (document.getElementById('number1'));
function inputValue(value) {
    num.value += value;
}
function result() {
    let result = eval(num.value);
    num.value = result;
}
function xoa() {
    num.value="";
}