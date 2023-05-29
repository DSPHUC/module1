let count = 0;
let i = 0;
let sum = 0;
for (let n = 0; count <= 30; n++) {
    if (n % 7 == 0) {
        sum += n;
        console.log(count+" "+ sum);
        count++;
    }

}
document.write(sum);