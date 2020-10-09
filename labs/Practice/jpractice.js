let sunX = 40;

function setup() {
    createCanvas (400,300);
    sunX ++;

    var functionResult = isEven(2);
    console.log(functionResult);
}

function isEven (amount) {
    let result = amount % 2 == 0;
    return result;
}

function draw() {
    background(100)
    sunX ++;
    drawSun("#293452", 15, mouseX -10, mouseX - 10);
    drawSun("#fcda51", 15, mouseY, mouseX);
}

function drawSun(sunColor, numRays, yHeight, xHeight) {

    fill(sunColor);
    stroke(sunColor);

    for(var i = 0; i < numRays; i++) {
        line(xHeight, yHeight, i * 20, 300);
    }

    circle(xHeight, yHeight, 40);
}

console.log("I suck dick");

//function def
function sayHello(){
    console.log("I suck butts");
}

//run function? Like This!!

sayHello(); //make sure to have the curly brackets 