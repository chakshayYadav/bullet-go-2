var bullet , wall;


var thickness;
var speed , weight;

var zero=0;


function setup() {
  createCanvas(1600,400);

thickness=random(20,90)
speed=random(200,300);
weight=random(30,50);

  bullet = createSprite(50, 200, 100, 20);
  bullet.velocityX=speed;
bullet.shapeColor=("blue")

  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor=("black");

  
 
   
}

function draw() {
  background("green"); 
  
  if(wall.x-bullet.x < (bullet.width+wall.width/2)){
bullet.velocityX=zero;

  var d = 0.5 * weight *speed * speed/(thickness * thickness * thickness);

  if (d>10){
    bullet.shapeColor=color(255,0,0);
  }

 

  if (d<10){
    bullet.shapeColor=color(0,255,0);
  }
  }


  drawSprites();


}