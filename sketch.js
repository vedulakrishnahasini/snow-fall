const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var back_img;
var boy;
var boyImg

var engine , world
var snowfall=[]
var ground
function preload() {
  back_img = loadImage("snow2.jpg");
  boyImg=loadImage("kid.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
   engine=Engine.create()
   world=engine.world
   boy=createSprite(width/4,800)
   boy.addImage(boyImg)
   boy.scale=0.5
   boy.rotation=-15
ground=createSprite(width/2,height-50,width,20)
ground.visible=false

}

function draw() {
  Engine.update(engine);
  background(back_img);
  drawSprites();
  if(frameCount%10===0){
    var snow=new Snow(random(0,width),random(0,100))
    snowfall.push(snow)
  
  }
  boy.collide(ground)
  if(keyDown("space")){
    boy.velocityY=-10

  }
  boy.velocityY=boy.velocityY+0.5
  for(var i=0;i<snowfall.length;i++){
    snowfall[i].display();

  }
}