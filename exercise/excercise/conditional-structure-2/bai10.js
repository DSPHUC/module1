let num = Number(prompt('number'));
    let money = 0;
    //bậc 1
    switch (num < 0 ? 0: num <= 50 ? 1 : num <= 100 ? 2 : num <= 200 ? 3 : num <= 300 ? 4 : num <= 400 ? 5 : 6) {
        case 0: alert(money)= 0;
            break;
        case 1: money = (num * 1728);
            alert(money)= money;
            break;
        case 2: money = (50 * 1728 + (num - 50) * 1786);
            alert(money)= money;
            break;
        case 3: money = (50 * 1728 + 50 * 1786 + (num - 100) * 2074);
            alert(money)= money;
            break;
        case 4: money = (50 * 1728 + 50 * 1786 + 100 * 2074 + (num - 200) * 2612);
            alert(money)= money;
            break;
        case 5: money = (50 * 1728 + 50 * 1786 + 100 * 2074 + 100 * 2612 + (num - 300) * 2919);
            alert(money)= money;
            break;
        default: money = (50 * 1728 + 50 * 1786 + 100 * 2074 + 100 * 2612 + 100 * 2919 + (num - 400) * 3015);
            alert(money)= money;
            break;
    }
    