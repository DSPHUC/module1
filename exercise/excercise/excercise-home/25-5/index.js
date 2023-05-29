// let x = parseInt(prompt("nhập độ dài mảng 1 "));
// let y = parseInt(prompt("nhập độ dài mảng 2 "));
// let numbers = [];
// for (let i = 0; i < x; i++) {
//     numbers[i] = [];
//     for (let j = 0; j < y; j++) {
//         numbers[i][j] = Math.ceil((Math.random()*31 ) +20);

//     }
// }
// console.log(numbers);

let x = parseInt(prompt("nhập độ dài mảng 1 "));
let y = parseInt(prompt("nhập độ dài mảng 2 "));
function createArray(x, y) {
    let array = [];
    for (let i = 0; i < x; i++) {
        array[i] = [];
        for (let j = 0; j < y; j++) {
            array[i][j] = Math.ceil((Math.random()*31 ) +20)
        }

    } return array;

}
console.log(createArray(x,y));