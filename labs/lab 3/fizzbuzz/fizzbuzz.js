let black = "#202422";
let purple = "#8467c7";
let green = "#67c797";
let blue = "#6784c7";

let x = 50;

function setup() {
    createCanvas(1400,300);
}

function draw(){

    for (n = 0; n < 26; n++) {
        fill (black);
        circle (x, 50, 25);
        x += 55
        console.log(n)

    }
    console.log("Divider")
}
