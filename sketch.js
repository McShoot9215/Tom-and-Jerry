var garden, gardenImg;
var cat, catImg, cat_running, cat_smug;
var mouse, mouseImg, mouse_dancing, mouse_dead;

function preload() {    
    gardenImg = loadImage("garden.png");

    catImg = loadImage("cat1.png");
    cat_running = loadAnimation("cat2.png", "cat3.png");
    cat_smug = loadImage("cat4.png");
    
    mouseImg = loadImage("mouse1.png");
    mouse_dancing = loadAnimation("mouse2.png", "mouse3.png");
    mouse_dead = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    garden = createSprite(500,400,1000,800);
    garden.addImage("garden", gardenImg);

    cat = createSprite(600,500,50,100);
    cat.addImage("cat", catImg);

    mouse = createSprite(300,500,25,50);
    mouse.addImage("mouse", mouseImg);
}

function draw() {

    background(255,255,255);
    
    if(cat.x - mouse.x <= (mouse.width + cat.width) / 2 && mouse.x - cat.x <= (mouse.width + cat.width) / 2 && 
     cat.y - mouse.y <= (mouse.height + cat.height) / 2 && mouse.y - cat.y <= (mouse.height + cat.height) / 2){
   
     mouse.changeAnimation("dead", mouse_dead);
     cat.addAnimation("smug", cat_smug);
     cat.velocityX = 0;
    }

    if(mousePressedOver(garden)) {
        keyPressed();
    }

    drawSprites();
}


function keyPressed(){

  cat.changeAnimation("running", cat_running);
  mouse.changeAnimation("dancing", mouse_dancing);

  cat.velocityX = -3;

}
