let integer=[];
let count=0;
for (i = 0; i < 10; i++) {
    integer[i]=Math.floor(Math.random()*101)
}
for (let i = 0; i < integer.length; i++) {
    if (integer[i] >= 10) {

        count += 1;
    }
}
console.log(integer);
console.log(count);
