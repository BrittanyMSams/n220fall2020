let drop = [0,5,10,15,20,25, 30, 35, 40, 45, 50];
console.log(drop);

function setup() {
     createCanvas (400,300);

     background("#42cbf5");
     
     fill("a3e9ff");

    for(var i = 0; i < drop.length; i ++) {
        circle(200, 50 * i, 20);
    }

}
