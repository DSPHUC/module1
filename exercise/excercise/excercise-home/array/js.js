// tạo mảng có 10 phần tử có giá trị  10-20> log mảng

function createArray(size, min, max) {
    let array = [];
    for (let i = 0; i < size; i++){
        array[i]= Math.floor(Math.random()*(max-min+1))+min;
    }
        return array;
}
console.log(createArray(10,10,20));