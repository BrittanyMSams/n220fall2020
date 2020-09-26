
let positions = [0,0,0,0,0,0,0,0,0,0,0,0];

function setup(){
    createCanvas(400, 300);
}

function draw() {

  background(50);

  positions.push(mouseY);
  positions.shift(mouseX);

    for(var i = 0; i < positions.length; i++) {
        circle(positions[i], mouseX, 20);
    }


}