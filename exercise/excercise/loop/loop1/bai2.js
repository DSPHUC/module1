for (let tem = +prompt('Nhap nhiet do'); ; ){
    
    if (tem > 100) {
        tem = +prompt(' Giam nhiet do');
    } else if (tem < 20) {
        tem = +prompt(' Tang nhiet do');
    
    } else {
        document.write('Nhiet do hien tai la ' + tem);
        break;
    }
}