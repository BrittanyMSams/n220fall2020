/*//make element
let newEl = document.createElement("div");

//customize
newEl.innerHTML = "Testing";
newEl.style.backgroundColor = "#edcf34";
newEl.style.width = "40px";

//place item on page
document.body.appendChild(newEl);
*/
let dvCoin = document.getElementById("coin")

dvCoin.innerHTML = "tails"
dvCoin.style.backgroundColor = "#edcf34"
dvCoin.style.width = "100px";
dvCoin.style.height = "100px";

function flipCoin() {

    //do a coin flip
    let flip = Math.random()
    let side = "heads";
    if(flip > .5) side = "tails";

    //set results in innerHTML
    dvCoin.innerHTML = side;

    //change background color based on result
    if(side == "tails"){
        dvCoin.style.background= "#edcf34"
    }
    else{
        dvCoin.style.background= "#eb5634"
    }

    //record result in result list
    //make element
    let newEl = document.createElement("div");

     //customize
    newEl.innerHTML = side;
    newEl.style.backgroundColor = "#999";
    newEl.style.width = "40px";
    newEl.style.float = "left";
    newEl.style.margin = "3px";

    //place item on page
    document.body.appendChild(newEl);
}