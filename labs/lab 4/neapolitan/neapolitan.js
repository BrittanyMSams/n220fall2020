
let icecream = ["#FA94B5", "#FFDDBD", "#8C6551"];

function setup() {
createCanvas(500, 300);

    for(var c = 0; c < colors.length; c ++) {
        fill (colors[c]);
        rect(130 * c, 0 , 125, 200,);
        console.log(colors)
    }
    
}
