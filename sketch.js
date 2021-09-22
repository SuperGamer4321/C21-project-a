
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var myWorld;
var ball;
var base,side1,side2;

function preload()
{
	
}

function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	myWorld = engine.world;

	//Create the Bodies Here.
	var ball_option = {
	   isStatic : false,
	   restitution : 0.02,
	   friction : 0,
	   density : 1.2
	}

	ball = Bodies.circle(200,320,12,ball_option);
	World.add(myWorld,ball);
	console.log(ball);

	base = new Ground(300,340,800,10);
	World.add(myWorld,base);

	side1 = new Ground(550,270,10,150);
	World.add(myWorld,side1);

	side2 = new Ground(700,270,10,150);
	World.add(myWorld,side2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  drawSprites();
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,12);
  base.display();
  side1.display();
  side2.display();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(ball ,{ x : 0 , y : 0 } , { x : 7.5 , y : -1});
	}
}

