let icecream = ["#3bbaff", "#e8f4fa", "#ff4242"];

var myDrop = {
    x: 365,
    y: 39,
    r: 30,
    color: [255, 66, 66]
}

var myDrop2 = {
    x: 200,
    y: 39,
    r: 30,
    color: [232, 244, 250]
}

var myDrop3 = {
    x: 45,
    y: 39,
    r: 30,
    color: [59, 186, 255]
}

console.log(myDrop)
console.log(myDrop2)
console.log(myDrop3)

function setup() {
    createCanvas(500, 300);
    
    noStroke();

        for(var c = 0; c < icecream.length; c ++) {
            fill (icecream[c]);
            rect(130 * c, 0 , 140, 80);
            console.log(icecream)
        }
        
    }

function draw(){
    fill("#e3aa6d");
    rect(400, 30, 80, 20,);

    myDrop.y += 2;
    myDrop2.y += 3;
    myDrop3.y += 4;

    fill(myDrop.color);
    circle(myDrop.x, myDrop.y, myDrop.r);

    fill(myDrop2.color);
    circle(myDrop2.x, myDrop2.y, myDrop2.r);

    fill(myDrop3.color);
    circle(myDrop3.x, myDrop3.y, myDrop3.r);

    
}