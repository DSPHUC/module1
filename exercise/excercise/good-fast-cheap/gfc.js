function checkClick(id) {
    let checkG = document.getElementById("good");
    let checkF = document.getElementById("fast");
    let checkC = document.getElementById("cheap");
    switch (id) {
        case "good":
            if (checkF.checked && checkC.checked) {
                checkF.checked = false;
            }
            break;
        case "fast":
            if (checkC.checked && checkG.checked) {
                checkC.checked = false;
            }
            break;
        case "cheap":
            if (checkF.checked && checkG.checked) {
                checkG.checked = false;
            }
            break;
    }
}