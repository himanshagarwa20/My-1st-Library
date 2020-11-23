var rect1, rect2, rect3, rect4,rect5;

function setup() {
createCanvas(1200,800);
  rect1=createSprite(200,200,50,80);
  rect2=createSprite(400,200,80,30);
  rect3=createSprite(600,200,50,50);
  rect4=createSprite(800,200,50,50);
  rect5=createSprite(1000,200,50,50);
  rect1.shapeColor="green";
  rect2.shapeColor="green";
  rect3.shapeColor="green";
  rect4.shapeColor="green";
  rect5.shapeColor="green";

  rect1.velocityX=2;
  rect5.velocityX=-2;
}

function draw() {
  background("Red");  
  rect3.x=World.mouseX;
  rect3.y=World.mouseY;

  if (isTouching(rect4,rect3)){
  rect3.shapeColor="yellow";
  rect4.shapeColor="yellow";
  } 
  else {
  rect3.shapeColor="green";
  rect4.shapeColor="green";
  }
  bounceOff(rect1,rect5);
  drawSprites();
}
