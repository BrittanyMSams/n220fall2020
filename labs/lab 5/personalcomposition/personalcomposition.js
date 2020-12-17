//This line is to set the colors for the flashing lights
let colors = ["#27f2f2","#1183d4","#2e20b0","#4e2c85"];

let positions = [0,0,0,0,0,0,0,0,0,0,0,0];

//to create the cricles and canvas
function setup() {

    createCanvas(500, 500)

    //this is to make the rectangles the colors from the array above
    for(var c = 0; c < colors.length; c ++) {
        fill (colors[c]);
        rect(130 * c, 0 , 125, 200,);
        console.log(colors)
    }
}

 //The if statemnts are for when the Y of the mouse is pass a certent point the colors will switch to black and give a message in the console 
//This is were my problem starts it dosen't change the rects to black witch I can't figure out why
//In order for the mouse Ys to work they have to be in a draw function so I don't know if thats the problem

    function draw(){
        if(mouseY > 250) {
            fill(51, 51, 49);
         console.log("OI! Where the colors go!")
        }
        
    }