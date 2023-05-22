function tinhtoan() {
    let thang = Number(document.getElementById('thang').value);
    switch (thang == 1 ? 0 : thang == 2 ? 1 : thang == 3 ? 2 : thang == 4 ? 3 : thang == 5 ? 4 : thang == 6 ? 5 : thang == 7 ? 6 : thang == 8 ? 7 : thang == 9 ? 8 : thang == 10 ? 9 : thang == 11 ? 10 : thang == 12 ? 11 : 12) {
        case 0 : document.getElementById('result').innerHTML="Tháng "+thang+" có 31 ngày";
            break;
        case 1: document.getElementById('result').innerHTML="Tháng "+thang+" có 28 ngày hoặc 29 ngày";
            break;
        case 2: document.getElementById('result').innerHTML="Tháng "+thang+" có 31 ngày";
            break;
        case 3: document.getElementById('result').innerHTML="Tháng "+thang+" có 30 ngày";
            break;
        case 4: document.getElementById('result').innerHTML="Tháng "+thang+" có 31 ngày";
            break;
        case 5: document.getElementById('result').innerHTML="Tháng "+thang+" có 30 ngày";
            break;
        case 6: document.getElementById('result').innerHTML="Tháng "+thang+" có 31 ngày";
            break;
        case 7: document.getElementById('result').innerHTML="Tháng "+thang+" có 31 ngày";
            break;
        case 8: document.getElementById('result').innerHTML="Tháng "+thang+" có 30 ngày";
            break;
        case 9: document.getElementById('result').innerHTML="Tháng "+thang+" có 31 ngày";
            break;
        case 10: document.getElementById('result').innerHTML="Tháng "+thang+" có 30 ngày";
            break;
        case 11: document.getElementById('result').innerHTML="Tháng "+thang+" có 31 ngày";
            break;
            default: document.getElementById('result').innerHTML="Nhập lại tháng";
            break;
    }

}