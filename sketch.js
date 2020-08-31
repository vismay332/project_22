var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  thickness=random(22,83);
  
  bullet=createSprite(50,200,70,10);
    speed=random(223,321);
    bullet.velocityX=speed;
  weight=random(30,52);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(255,255,255); 

  if(HasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(225,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,225,0);
    }

  }
  drawSprites();
}

function HasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
  return true;
  }
  return false;
}