var fiedRect,movingRect;

function setup() {
  createCanvas(400,400);
  fixedRect=createSprite(200, 200, 50, 70);
  movingRect=createSprite(300,200,70,50);
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if (fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 &&
    movingRect.x-fixedRect.x <  movingRect.width/2+fixedRect.width/2 && 
    fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2 &&
    movingRect.y-fixedRect.y <  movingRect.height/2+fixedRect.height/2) {
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}