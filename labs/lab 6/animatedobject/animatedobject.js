var myObject = {
    x: 40,
    y: 40,
    r: 30,
    color: [50, 122, 194],
}


function setup() {
    createCanvas(300, 400)
}

function draw() {
    fill(myObject.color)
    myObject.x += 1;
    myObject.y += 1;
    myObject.r += 1;
    circle(myObject.x, myObject.y, myObject.r);
}