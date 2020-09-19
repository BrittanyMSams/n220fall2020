let grey = "#d4d4d4";
let white = "#ffffff"

function setup() {
    createCanvas(400,400);
}

function draw(){
    background(grey);

    for (var n = 41; n > 0 ; n--) {
        fill (white);
        circle (200, 200, n * 5);
    }

}