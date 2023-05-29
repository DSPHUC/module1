let array = [-3, 5, 1, 3, 2, 10,  5];
let temp=0;
for (let i = 0; i < array.length/2; i++){
    
    [array[i],array[array.length-1-i]]=
    [array[array.length-1-i],array[i]];
}
document.write(array);