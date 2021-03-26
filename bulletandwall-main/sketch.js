var bullet;
var wall;
var thickness;
var speed;
var weight;
var damage;
function setup() 
{
createCanvas(1600,400);
bullet=createSprite(50,200,50,50);
thickness=Math.round(random(22,83));
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor(80,80,80);
speed=Math.round(random(223,321));
weight=Math.round(random(30,52));
bullet.velocityX=speed;
damage=0.5*weight*speed*speed/thickness*thickness*thickness;
}
function draw() {
  background("black"); 
  bullet.collide(wall);
if(wall.x-bullet.x<(wall.width+bullet.width)/2+1) 
{
  if(damage<=10)
{
  wall.shapeColor="green";
}
else if(damage>10)
{
  wall.shapeColor="red";
}
}
  drawSprites();
}


