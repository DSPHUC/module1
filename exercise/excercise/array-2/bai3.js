let str = "ad123asv3b43dgjk32b332h43d4fjkb";
let arr = str.split('');
// let count= arr.length;
let count = 0;
for (let i = 0; i < str.length; i++) {
    Number(str[i])
    if (!isNaN(Number(str[i]))) {
        count += 1;
    }
}
console.log(count);