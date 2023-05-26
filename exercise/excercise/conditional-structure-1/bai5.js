let ponit1=Number(prompt("Nhập điểm kiểm tra"));
let ponit2=Number(prompt("Nhập điểm thi giữa kì"));
let ponit3=Number(prompt("Nhập điểm thi cuối kì"));
let pointFinal=((ponit1+2*ponit2+3*ponit3)/+6);
console.log(pointFinal);
if (pointFinal>=9) {
    alert("Giỏi");
    
} else if (pointFinal>=7){
    alert("Khá");
}
else if (pointFinal>=5){
    alert("Trung bình");
}
else{alert("Yếu");}
    
