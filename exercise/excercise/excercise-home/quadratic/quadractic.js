function getCount() {
    let a = +(document.getElementById('numberA').value);
    let b = +(document.getElementById('numberB').value);
    let c = +(document.getElementById('numberC').value);   
    let x1=0;
    let x2=0;
    let dela = (b ** 2 - 4 * a * c);
    console.log(dela);
    if (dela == 0) {
        x1 = -b / (2 * a);
        document.getElementById('variaX1').value = x1;
        // console.log('variax1');  
        x2 = -b / (2 * a);
        document.getElementById('variaX2').value = x2;
        // console.log('variax1');
    }
    else if (dela > 0) {
        x1 = (-b + Math.sqrt(dela)) / (2 * a);
        document.getElementById('variaX1').value = x1;
        // console.log('variax1');
        x2 = (-b - Math.sqrt(dela)) / (2 * a);
        document.getElementById('variaX2').value = x2;
        // console.log('variax1');
    }
    else { 
        document.getElementById('variaX1').value = 'Vo nghiem' ;
        document.getElementById('variaX2').value = 'Vo nghiem' ;
        
    }
}
