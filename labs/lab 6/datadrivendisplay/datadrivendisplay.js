var myBook = {
    w: 160,
    h: 230,
    x: 150,
    y: 100,
    color: [120, 93, 194],
}

var myTitle = {
    w: 80,
    h: 30,
    x: 185,
    y: 130,
    color: [230, 230, 230],
}

function setup() {
    createCanvas(300, 400);
}

function draw() {
    noStroke();
    fill (myBook.color);
    rect(myBook.x, myBook.y, myBook.w, myBook.h)
    fill (myTitle.color);
    rect(myTitle.x, myTitle.y, myTitle.w, myTitle.h)
}


