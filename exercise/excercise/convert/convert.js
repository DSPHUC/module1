function Change() {
    let Amount = document.getElementById('Amount').value;
    let Form = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let result;
    if (Form == "VND" && to == "USD") {
        result = "result:" + (Amount / 23000) + " $";   
    }
    else if (Form == "USD" && to == "VND") {
        result = "result:" + (Amount * 23000) + " Đ";
    }
    else if (Form == "USD") {
        result = "result:" + Amount + " $"
    } else {
        result = "result:" + Amount + " Đ"
    }
    document.getElementById("result").innerHTML = result;
}