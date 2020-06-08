var mario_running;

var ground;
var groundImage;
var mariorunning;

var score;
var obstacleImage;
function preload(){
  mario_running = loadAnimation("mario.png","mario1.png");
//marioImage= loadAnimation("mario .png");
//mario1Image= loadAnimation("mario1.png");
groundImage =loadImage("ground.png");
obstacleImage =loadAnimation("obstacle.png")
cloudImage = loadAnimation("cloud.png");

}

function setup(){
canvas = createCanvas(1200,550);




mariorunning = createSprite(200,200,50,50);
mariorunning.addAnimation("mariorunning",mario_running);
mariorunning.scale = 0.5;
ground = createSprite(500,500,1200,50);
ground.addImage("ground",groundImage);

ground.velocityX = -6;

}
function draw(){

background(255);

  if (ground.x < 0){
    ground.x = ground.width/2;

  } 


  if(keyDown("space")  ) {
    mariorunning.velocityY = -12;
  }

  mariorunning.velocityY = mariorunning.velocityY + 0.8

  mariorunning.collide(ground);
spawnobstacle();
spawncloud();
drawSprites();
}
  


   
function spawnobstacle(){
    if(frameCount % 250 === 0){
    
    obstacle = createSprite(1000,450,60,50);
    obstacle.addAnimation("obstacle",obstacleImage);
    obstacle.velocityX = -5;
    obstacle.scale = 0.3;
    obstacle.lifetime = 200;
    }
    }
function spawncloud(){
  if(frameCount % 200 ==0){
cloud = createSprite(800,80,50,50);
cloud.addAnimation("cloud",cloudImage);
cloud.velocityX = -3;
cloud.scale = 0.2;
cloud.lifetime = 250;
  }
  
}







