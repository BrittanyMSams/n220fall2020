let grey = "#d4d4d4";
let white = "#ffffff"

function setup() {
    createCanvas(400,400);
}

function draw(){
    background(grey);

    noFill();

    for (var n = 0; n < 41 ; n++) {
        circle (200, 200, n * 5);
    }

}