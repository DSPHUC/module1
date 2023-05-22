function test1() {
    let kg = Number(document.getElementById("kg").value);
    let cm = Number(document.getElementById("cm").value);
    let bmi = (kg / ((cm/100) ** 2));
    let result = "";
    if (bmi < 16) {
        result = "Gầy cấp độ 3- Cần ăn nhiều"
    }
    else if (bmi < 17) {
        result = "Gầy cấp độ 2"
    }
    else if (bmi < 18.5) {
        result = "Gầy cấp độ 1"
    }
    else if (bmi < 25) {
        result = "Bình thường"
    }
    else if (bmi < 30) {
        result = "Thừa cân"
    }
    else if (bmi < 35) {
        result = "Béo phì độ 1"
    }
    else if (bmi < 40) {
        result = "Béo phì độ 2"
    }
    else {
        result = "Béo phì độ 3"
        document.getElementById("result").innerHTML = "Chỉ số BMI của bạn là:" + bmi + ". Bạn " + "<b>" + result + "</b>";
    }
}