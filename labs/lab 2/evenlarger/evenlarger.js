function draw(){
    createCanvas (800,600);
    background ("#87ffd3");
    noStroke();

    let D = 40;

    D++;

    fill("#59383d");
    circle (400, 300, D);

    if(D > 300){
        fill("#59383d");
        circle (400, 300, D);
    }

}
