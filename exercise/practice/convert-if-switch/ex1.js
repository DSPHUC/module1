let browser = prompt("Enter your browser");
// if (browser == 'Edge') { 
switch (browser) {
    case 'Edge':
        alert("You've got the Edge");
        break;
        case 'Chrom':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert("We support these browser too")
            break
            default: alert("We hope tha this page looks ok");
}