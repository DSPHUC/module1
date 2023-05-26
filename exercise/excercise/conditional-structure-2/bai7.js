let a = prompt('numberA');
let b = prompt('numberB');
let c = prompt('numberC');
let x1 = 0;
let x2 = 0;
let dela = (b ** 2 - 4 * a * c);
if (dela == 0) {
    x1 = -b / (2 * a);
    alert(X1);
    x2 = -b / (2 * a);
    alert(x2);
}
else if (dela > 0) {
    x1 = (-b + Math.sqrt(dela)) / (2 * a);
    alert(x1);
    x2 = (-b - Math.sqrt(dela)) / (2 * a);
    alert(x2);
}
else {
    alert('Vo nghiem');
    alert('Vo nghiem');

}
