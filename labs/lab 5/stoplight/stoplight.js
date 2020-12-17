let stoplight = ["#de0f00","#dde645","#32c914"]

function setup() {
    createCanvas(700, 700)
    
    rect(190,0,220,530)

    for(var c = 0; c < stoplight.length; c ++) {
        fill (stoplight[c]);
        circle (300, 210 * c, 100);
        console.log(stoplight)
    }
    
}