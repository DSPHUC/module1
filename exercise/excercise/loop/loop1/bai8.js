let guessWhat = Number(prompt("Đoán trong khoảng từ 0 đến: "));
let rd = Math.floor((Math.random() * guessWhat + 1));
for (let i = 1; i <= 3; i++) {
    let guess = Number(prompt("Nhập số bạn đoán: "));
    if (guess == guessWhat) {
        alert("Bạn đã đoán trúng");
    } else {
        alert("vui lòng đoán lại,số lần đoán của bạn: " +i);

    }
}
alert("Bạn đã thua");