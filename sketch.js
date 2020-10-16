
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	go = new ground(780, 350, 500, 20, {isStatic:true});

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyCode === UP_ARROW) {
	  Matter.body.applyForce(paperObject.body, paperObject.body.position, {x : 85, y : -85})
  }
  
  go.display();
 
}



