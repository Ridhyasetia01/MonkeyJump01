
    var monkey , monkey_running
    var banana ,bananaImage, obstacle, obstacleImage
    var FoodGroup, obstacleGroup
    var score
    var ground,groundImg;
    var invisibleground;

    var survivalTime=0;
    var score=0;

function preload(){
  
  
      monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

      bananaImage = loadImage("banana.png");
      obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    //create Monkey
    monkey=createSprite(40,310,20,20);
    monkey.addAnimation("run",monkey_running);
    monkey.scale=0.1;

    //create ground
    ground=createSprite(400,350,900,20);
    ground.velocityX=-4;

    

FoodGroup=createGroup();
obstacleGroup=createGroup();
  
}


function draw() {
  
    background("white");

      if (ground.x < 0){
        ground.x = ground.width/2;
      }
  
stroke("yellow");
textSize(20);
fill("red")
text("Score: "+score,20,50);
  
stroke("pink");
textSize(20);
fill("purple");
survivalTime=Math.ceil(frameCount/80);
text("SurvivalTime: "+survivalTime,200,50);
  
if(keyDown("space")&&monkey.y>=300){
  monkey.velocityY=-7;
}
   monkey.velocityY = monkey.velocityY + 0.4;

       monkey.collide(ground);

    drawSprites();

    SpawnBananas();
  
SpawnObstacles();
  
  console.log(monkey.y);
  
}

function SpawnBananas(){
    if(frameCount % 80 ===0){
      banana=createSprite(390,120,20,20);
      banana.velocityX=-4;
      banana.addImage("fruit",bananaImage);
      banana.scale=0.1;
      banana.y=Math.round(random(200,300));
      FoodGroup.add(banana);
    }
}

function SpawnObstacles(){
if(frameCount % 300===0){
obstacle=createSprite(360,320,20,20);
obstacle.addImage("rocks",obstacleImage);
obstacle.velocityX=-2;
obstacle.scale=0.1;
obstacleGroup.add(obstacle);
}
}



