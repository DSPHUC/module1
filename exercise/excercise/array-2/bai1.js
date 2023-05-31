
function creatArray(x, y, min, max) {
    let array = [];
    for (let i = 0; i < x; i++) {
        array[i] = [];
        for (let j = 0; j < y; j++) {
            array[i][j] = Math.ceil((Math.random() * (max - min + 1)) + min);

        }
    }

    for (let i in array) {
        document.write("row " + i);
        document.write(" <br>");
        for (let j in array[i]) {
            document.write(array[i][j]);
            document.write(" </br>");
        }

    }
}
let arrays=creatArray(5,6,20,50)

