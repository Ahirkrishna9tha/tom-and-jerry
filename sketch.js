var tom,mouse,cat2,cat3,cat4,mouse1,mouse2,mouse3,mouse4 ,background;

function preload() {
    //load the images here
    tom1Image=loadImage("images/cat1.png");
    tom2Image=loadAnimation("images/cat2.png","images/cat3.png");
    tom3Image=loadImage("images/cat4.png")
    mouse1Image=loadImage("images/mouse1.png")
    mouse2Image=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Image=loadImage("images/mouse4.png")
backgroundImage=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(600,600,10,10);
    tom.addAnimation("catImage",tom1Image);
    tom.changeAnimation("catImage");
    tom.scale= 0.2;

    mouse1=createSprite(150,600,10,10);
    mouse1.addAnimation("mouse",mouse1Image)
mouse1.scale= 0.1;
}

function draw() {

    background(backgroundImage);

    if(tom.x-mouse1.x<(tom.width-mouse1.width)/2){
tom.velocityX=0;
tom.addAnimation("catlastImage",tom3Image);
tom.changeAnimation("catlastImage");
mouse1.addAnimation("mouselastImage",mouse3Image);
mouse1.changeAnimation("mouselastImage");

    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode=== LEFT_ARROW) {
  tom.velocityX=-5;
  tom.addAnimation("catRunning",tom2Image);
  tom.changeAnimation("catRunning");
  mouse1.addAnimation("mouseteasing",mouse2Image);
  mouse1.changeAnimation("mouseteasing");
  
  }
}
