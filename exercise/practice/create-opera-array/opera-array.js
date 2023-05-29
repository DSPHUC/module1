let x = 0;
let array = Array();
function clickAdd() {
    array[x] = document.getElementById("textValue").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++
    document.getElementById("textValue").value = "";
}
function clickDis() {
    let e = "<hr/>";
    for (let i = 0; i < array.length; i++) {
        e += "Element " +i + " = " + array[i] + "<br/>";
    }
        document.getElementById("result").innerHTML= e;
}