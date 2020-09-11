let D = 1;

function setup(){
    createCanvas (800,600);
}

function draw(){
    background ("#87ffd3");
    noStroke();

    D += 3;

    fill("#59383d");
    circle (400, 300, D);

    if(D > 200){
        circle (400, 300, D);
        D = 1;
    }

}

