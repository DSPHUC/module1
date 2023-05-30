// let str = prompt("Nhập chuỗi kí tự");
let str = prompt("Nhập chuỗi kí tự: ");
let upstr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let downstr = 'abcdefghijklmnopqrstuvwxyz';
let strNew = [];
for (let i = 0; i < str.length; i++) {
    if (upstr.indexOf(str[i]) == -1) {
        strNew.push(str[i].toUpperCase());
    }
    if (downstr.indexOf(str[i]) == -1) {
        strNew.push(str[i].toLowerCase());
    }
}
console.log(strNew.join(''));