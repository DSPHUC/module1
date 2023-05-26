let sales=prompt("Nhập doanh số bán bán hàng");
//5m 2%---30m 3%---50m 5%---100m 11%
if (sales>=100000000){
    sales=sales*11/100;
    console.log(sales)
    alert("hoa hồng nhận được là: " +sales +" VNĐ");
}
else if(sales>=50000000){
    sales=sales*5/100;
    alert("hoa hồng nhận được là: " +sales +" VNĐ");
    
}   
else if(sales>=30000000){
    sales=sales*3/100;
    alert("hoa hồng nhận được là: " +sales +" VNĐ");
    
}   
else if(sales>=5000000){
    sales=sales*5/100;
    alert("hoa hồng nhận được là: " +sales +" VNĐ");
    
}   
else {
    sales=sales*1/100;
    alert("hoa hồng nhận được là: " +sales +" VNĐ");
}
