
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  option = {
    restitution: 0.95
  
  }
  ball = Bodies.circle(200,200, 20, option);
  World.add(world, ball);
  gOption = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20, gOption)
  World.add(world, ground)
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

}


function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y, 400,20)

}

