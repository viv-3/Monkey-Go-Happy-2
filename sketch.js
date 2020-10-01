//variables
var monkey, monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0
var ground, invisibleGround;

//images
function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}


function setup() {
 
  //making monkey
 monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1   
  
  //making ground
  ground = createSprite(80,355,900,80);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  //bananas & rocks groups
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
  //score
  score = 0
}


function draw() {
 
  //moving ground
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  
  //monkey jump
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
   }
    
  //monkey gravity
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  //calling bananas, and obstacles
  food();
  enemy();
  
  //obastacles
  background(400)
  
  //score
  stroke("black");
  textSize(20);
  fill("white")
  text("Score: ", + score,500,50);
  
  //surivial time
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
  
  //display sprites
  drawSprites();
}

  //banana function
function food(){
 if (World.frameCount%80 === 0) {
    banana = createSprite(400,200,20,20);
    banana.addImage("moving", bananaImage);
    banana.scale = 0.1
    banana.y = Math.round(random(120,200));
    banana.velocityX = -4
    banana.setLifetime = 500;
    foodGroup.add(banana);
 }
}
  // obstacle function
function enemy(){
 if (World.frameCount%300 === 0) {
    obstacle = createSprite(400,200,20,20);
    obstacle.addImage("moving", obstacleImage);
    obstacle.scale = 0.1
    obstacle.y = Math.round(random(220,400));
    obstacle.velocityX = -4
    obstacle.setLifetime = 500;
    obstacleGroup.add(obstacle);
 }
}



















