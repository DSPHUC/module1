function Change() {
    let Amount = document.getElementById('Amount').value;
    let Form = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let Result;
    if (Form == "VND" && to == "USD") {
        Result = "Result:" + (Amount / 23000) + " $";   
    }
    else if (Form == "USD" && to == "VND") {
        result = "Result:" + (Amount * 23000) + " Đ";
    }
    else if (Form == "USD") {
        result = "Result:" + Amount + " $"
    } else {
        result = "Result:" + Amount + " Đ"
    }
    document.getElementById("Result").innerHTML = Result;
}