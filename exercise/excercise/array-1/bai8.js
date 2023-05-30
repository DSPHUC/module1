let array = [];
for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 101)
}
let newArray = [];
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++)
        if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] =
                [array[j + 1], array[j]]
        }
}
console.log(array);