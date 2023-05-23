function checkClick(id) {
    let checkG = document.getElementById("good");
    let checkF = document.getElementById("fast");
    let checkC = document.getElementById("cheap");
    // // if (document.querySelectorAll("input.check1"))
    // let checked1 =document.querySelectorAll("check1").length ==true;
    // let checked2 =document.querySelectorAll("check2").length ==true;
    // let checked3 =document.querySelectorAll("check3").length ==true;
    // if  (checked1.checked==true &&checked2.checked==true){
    //     checked1.checked==false;
    // }
    // else if  (checked3.checked==true &&checked2.checked==true){
    //     checked2.checked==false;
    // }
    // else if  (checked1.checked==true &&checked3.checked==true){
    //     checked3.checked==false;
    // }
    switch (id) {
        case "good":
            if (checkedG.checked == true && checkedF.checked == true) {
                checkedG.checked == false;
            }
        case "fast":
            if (checked3.checked == true && checkedF.checked == true) {
                checkedF.checked == false;
            }
        case "cheap":
            if (checkedG.checked == true && checkedC.checked == true) {
                checkedC.checked == false;
            }
    }
}