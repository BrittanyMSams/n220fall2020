let colors = ["#db0211","#0231db","#00db5b","#f2ef16","#9c00ad"]; 

var c = 0;

function setup() {
 createCanvas(700,700);

 noStroke();

 for(var c = 0; c < colors.length; c ++) {
    fill (colors[c]);
    rect(130 * c, 0 , 125, 200,);
    console.log(colors)

}

if(keyIsDown(LEFT_ARROW))
    fill(colors.length * Math.random(c))

    else {
        console.log("Press the Left Arrow key to change the colors!")
        console.log("Try to get all the squares the same colors!")
    }
        
}

