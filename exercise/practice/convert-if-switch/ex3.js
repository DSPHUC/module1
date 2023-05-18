let a = parseInt(prompt('nhập 1 số:', ''));
// if (a > 0) {
//     alert(1);
// }
// else if (a < 0) {
//     alert(-1);
// }
// else { alert(0)

// }
switch ((a > 0) ? 1 : (a < 0) ? -1 : 0) {
    case 1:
        alert(1);
        break;
    case -1:
        alert(-1);
        break;
    default:
        alert(0);
}