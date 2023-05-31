// function recoverArray() {
    let array = ["c", "a", "3", "f", "5", "h", "d", "s", "f", "8", "0", "h"];
    let arrayNew = [];
    for (i = 0; i < array.length; i++) {
        arrayNew[i] = array[array.length - i - 1];
    } 
// } 
console.log(array);
console.log(arrayNew);