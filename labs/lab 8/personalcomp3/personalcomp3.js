let divBoxes = document.getElementById("boxes");

let divRight = document.getElementById("rightBoxes");

divBoxes.style.background = "#FF0000"
divBoxes.style.width = "100px"
divBoxes.style.height = "100px"
divBoxes.style.margin = "6px"
divBoxes.style.float = "left"

divRight.style.background = "#FF0000"
divRight.style.width = "100px"
divRight.style.height = "100px"
divRight.style.margin = "6px"
divRight.style.float = "left"


function cickly() {
    let first = Math.random()
    let click = "";
    if(first > .5) click = "Found me!!";

    divRight.innerHTML = click

     if(click == "Found me!!"){
        divRight.style.background= "#00FF00";
    }
    else{
        divRight.style.background= "#FF0000";
    }
}
