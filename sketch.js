
var gardenImg,garden;

function preload() {
    //load the images here
    gardenImg = loadImage(",/imges/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw(gardenImg) {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",catImg2);
        cat.chageAnimation("catRunning");

        Text(mouseX + ',' + mouseY, 10, 45);
    }
}
