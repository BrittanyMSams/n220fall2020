let red = "#ff031c";
let x = 50;
let y = 50;

function setup() {
    createCanvas(400,270);
}

function draw(){

    noStroke();

    for (n = 0; n < 4; n++) {
        fill (red);
        rect(x, y, 50, 50,);
        y += 55
    }

    console.log("Divider")
}
