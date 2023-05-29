let n = Number(prompt("Nhập số cần tìm: "));
let numbers = [3, 5, 7, 9, -5, 6, 4, 8, -9];
let index = false;
for (let i = 0; i < numbers.length; i++) {
    if (n === numbers[i]) {
        document.write(i);
        console.log(i);
        index = true;
        break;
    }

}
if (index == false) {
    document.write("Không tìm  thấy");
    console.log("Không tìm  thấy");
    
}