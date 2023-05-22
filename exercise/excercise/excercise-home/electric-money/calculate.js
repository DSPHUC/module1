// chỉ dùng mỗi if
function useif() {
    let num = Number(document.getElementById('number').value);
    let money = 0;
    //bậc 1
    if (num <= 50) {
        money = (num * 1728);
        document.getElementById('result').value = money;
    }
    //bậc 2
    if (num > 50 && num <= 100) {
        money = (50 * 1728 + (num - 50) * 1786);
        document.getElementById('result').value = money;
    }
    //bậc 3
    if (num > 100 && num <= 200) {
        money = (50 * 1728 + 50 * 1786 + (num - 100) * 2074);
        document.getElementById('result').value = money;
    }
    //bậc 4
    if (num > 200 && num <= 300) {
        money = (50 * 1728 + 50 * 1786 + 100 * 2074 + (num - 200) * 2612);
        document.getElementById('result').value = money;
    }
    //bậc 5
    if (num > 300 && num <= 400) {
        money = (50 * 1728 + 50 * 1786 + 100 * 2074 + 100 * 2612 + (num - 300) * 2919);
        document.getElementById('result').value = money;
    }
    //bậc 6
    if (num > 400) {
        money = (50 * 1728 + 50 * 1786 + 100 * 2074 + 100 * 2612 + 100 * 2919 + (num - 400) * 3015);
        document.getElementById('result').value = money;
    }
}
//dùng if else
function ifElse1() {
    let num = Number(document.getElementById('number').value);
    let money = 0;
    //bậc 1
    if (num <= 50) {
        money = (num * 1728);
        document.getElementById('result').value = money;
    }
    else { document.getElementById('result').value = money; }
    //bậc 2
    if (num > 50 && num <= 100) {
        money = (50 * 1728 + (num - 50) * 1786);
        document.getElementById('result').value = money;
    }
    else { document.getElementById('result').value = money; }
    //bậc 3
    if (num > 100 && num <= 200) {
        money = (50 * 1728 + 50 * 1786 + (num - 100) * 2074);
        document.getElementById('result').value = money;
    }
    else { document.getElementById('result').value = money; }
    //bậc 4
    if (num > 200 && num <= 300) {
        money = (50 * 1728 + 50 * 1786 + 100 * 2074 + (num - 200) * 2612);
        document.getElementById('result').value = money;
    }
    else { document.getElementById('result').value = money; }
    //bậc 5
    if (num > 300 && num <= 400) {
        money = (50 * 1728 + 50 * 1786 + 100 * 2074 + 100 * 2612 + (num - 300) * 2919);
        document.getElementById('result').value = money;
    }
    else { document.getElementById('result').value = money; }
    //bậc 6
    if (num > 400) {
        money = (50 * 1728 + 50 * 1786 + 100 * 2074 + 100 * 2612 + 100 * 2919 + (num - 400) * 3015);
        document.getElementById('result').value = money;
    }
    else { document.getElementById('result').value = money; }
}

function ifElseIf1() {
    let num = Number(document.getElementById('number').value);
    let money = 0;
    //bậc 1
    if (num <= 50) {
        money = (num * 1728);
        document.getElementById('result').value = money;
    }
    //bậc 2
    else if (num > 50 && num <= 100) {
        money = (50 * 1728 + (num - 50) * 1786);
        document.getElementById('result').value = money;
    }
    //bậc 3
    else if (num > 100 && num <= 200) {
        money = (50 * 1728 + 50 * 1786 + (num - 100) * 2074);
        document.getElementById('result').value = money;
    }
    //bậc 4
    else if (num > 200 && num <= 300) {
        money = (50 * 1728 + 50 * 1786 + 100 * 2074 + (num - 200) * 2612);
        document.getElementById('result').value = money;
    }
    //bậc 5
    else if (num > 300 && num <= 400) {
        money = (50 * 1728 + 50 * 1786 + 100 * 2074 + 100 * 2612 + (num - 300) * 2919);
        document.getElementById('result').value = money;
    }
    //bậc 6
    else {
        money = (50 * 1728 + 50 * 1786 + 100 * 2074 + 100 * 2612 + 100 * 2919 + (num - 400) * 3015);
        document.getElementById('result').value = money;
    }
}
function switchCase1() {
    let num = Number(document.getElementById('number').value);
    let money = 0;
    //bậc 1
    switch (num <= 50 ? 1 : num <= 100 ? 2 : num <= 200 ? 3 : num <= 300 ? 4 : num <= 400 ? 5 : 6) {
        case 1: money = (num * 1728);
            document.getElementById('result').value = money;
            break;
        case 2:money = (50 * 1728 + (num - 50) * 1786);
        document.getElementById('result').value = money;
            break;
        case 3:money = (50 * 1728 + 50 * 1786 + (num - 100) * 2074);
        document.getElementById('result').value = money;
            break;
        case 4:money = (50 * 1728 + 50 * 1786 + 100 * 2074 + (num - 200) * 2612);
        document.getElementById('result').value = money;
            break;
        case 5:money = (50 * 1728 + 50 * 1786 + 100 * 2074 + 100 * 2612 + (num - 300) * 2919);
        document.getElementById('result').value = money;
            break;
        default: money = (50 * 1728 + 50 * 1786 + 100 * 2074 + 100 * 2612 + 100 * 2919 + (num - 400) * 3015);
            document.getElementById('result').value = money;
            break;
    }
}