

function preload(){
  bathImage = loadAnimation("bath1.png","bath2.png")
brushImage = loadImage("brush.png")
drinkImage = loadAnimation("drink1.png","drink2.png")
eatImage = loadAnimation("eat1.png","eat2.png")
gymImage = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
issImage = loadImage("iss.png")
moveImage = loadAnimation("move.png","move1.png")
sleepImage = loadImage("sleep.png")

}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  Astronaut = createSprite(300,230)
  Astronaut.addAnimation("sleeping",sleepImage)
  Astronaut.scale = 0.1

  edges = createEdgeSprites()

}

function draw() {
  background(issImage);  
  drawSprites();
  Astronaut.bounceOff(edges)

  if(keyDown("UP_ARROW")){
    Astronaut.addAnimation("brushing",brushImage)
    Astronaut.changeImage("brushing")
    Astronaut.y = 350
    Astronaut.velocityX = 0
    Astronaut.velocityY = 0
  }
  if(keyDown("DOWN_ARROW")){
    Astronaut.addAnimation("gyming",gymImage)
    Astronaut.changeImage("gyming")
    Astronaut.y = 350
    Astronaut.velocityX = 0
    Astronaut.velocityY = 0
  }
}
