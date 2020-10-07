var bullet,wall;
var speed,weight;
var thickness;
var bulletRightEdge,walllLeftEdge,wallLeftEdge;
function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  thickeness=random(22,83);
  weight=random(30,52);

  bullet=createSprite(50, 200, 5, 20);
  bullet.shapeColor=color(230);
  bullet.velocityX = speed;

  wall = createSprite(700,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
 
}

function draw() {
  background(0);
  if(hasCollided(bullet, wall)){
bullet.velocityX=0;
var damage=0.5 * weight * speed*speed/(thickness*thickness*thickness);

if(damage>10){
  wall. shapeColor-color(255,0,0);
}
if(damage<10){
  wall. shapeColor-color(0,255,0);
 }
}
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge-bullet.x +bullet.width;
  wallLeftEdge-wall.x;
  if (bulletRightEdge>-walllLeftEdge)
  
  {
    return true;
  }
  
  return false;  
  
}