let userName = prompt("Who's there", '');
let pass = prompt("Password", '');
if (userName == 'DSP') {
    
    if (pass == 'Simulator') {
        alert('Welcome');
    }
    else if (pass == null) {
        alert('fail');
    }
    else {
        alert('wrong password');

    }
}
else if (userName == null) {
    alert('fail');
} else {
    alert("I don't know you");
}
