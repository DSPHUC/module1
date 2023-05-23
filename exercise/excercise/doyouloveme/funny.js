function no() {
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight);
    document.getElementById('btNo').style.left = x + "px";
    document.getElementById('btNo').style.top = y + "px";
}
function yes() {
    alert('Love You')
}