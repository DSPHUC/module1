let a = [];
let b = [];
for (let i = 0; i < 10; i++) {
    a[i] = Math.floor(Math.random() * 101)
    b[i] = Math.floor(Math.random() * 101)
}
let c = a.concat(b);
console.log(a);
console.log(b);
console.log(c);