var canvas;
var music;
var surface1, surface2, surface3,surface4;
var box;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    surface1=createSprite(90,585,180,30)
    surface1.shapeColor=("blue");

    surface2=createSprite(305,585,180,30)
    surface2.shapeColor=("orange");

    surface3=createSprite(505,585,180,30)
    surface3.shapeColor=("red");

    surface4=createSprite(710,585,180,30)
    surface4.shapeColor=("green");
    
    //create box sprite and give velocity
    box=createSprite(random(20,750));
    box.shapeColor=("white");
    box.velocityX=15
    box.velocityY=15
    
    box.scale=0.4
}

function draw() {
    background("grey");
    //create edgeSprite

    edges=createEdgeSprites();
    box.bounceOff(edges);
    

    //add condition to check if box touching surface and make it box
  if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor = ("blue");
    
}
  if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor = ("orange");
    box.velocityX=0
    box.velocityY=0
    music.stop();
    
}
  if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor = ("red");
    
}
  if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor = ("green");
    
}

  
    drawSprites();
}
