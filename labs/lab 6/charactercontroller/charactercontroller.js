var myPixel = {
    x: 40,
    y: 40,
    r: 30,
    color: [60, 189, 167],
    update: function () {
        fill (this.color);
        this.x += 2;
        circle(this.x, this.y, this.r);
    }
}

function setup() {
    createCanvas(200, 200)
}

function draw() {
    myPixel.update();
} 
