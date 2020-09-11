function draw(){
 createCanvas(400, 300);

    let red = "#eb4034";
    let blue = "#32e1ed";

    if (mouseX > 200) {
        fill(red);
        circle (mouseX,mouseY,40);
    }
    if (mouseX < 200) {
        fill(blue);
        circle (mouseX,mouseY,40);
    }
}