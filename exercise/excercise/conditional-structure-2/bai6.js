//Phương trình bậc nhất 1 ẩn
// let a=prompt("Nhập a");
// let b=prompt("Nhập b");
// let x;
// if (a!=0){
//     x=-b/a
//     alert("Nghiệm x là: " +x);
// }
// else {
//     alert("Đây không phải là phương trình bậc nhất");
// }
//Phương trình bậc nhất 2 ẩn
let a=prompt("Nhập a");
let b=prompt("Nhập b");
let c=prompt("Nhập c");
let d=prompt("Nhập d");
let e=prompt("Nhập e");
let f=prompt("Nhập f");
let x;
let y;
//ax+by=c   =>>x=(c-by)/a
//dx+ey=f   =>>(dc-af)/(db-ae)=y
y=(d*c-a*f)/(d*b-a*e);
x=(c-b*y)/a
alert(x);
alert(y);
