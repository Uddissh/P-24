
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	go = new ground(750, 680, 1500, 20, {isStatic:true});
	log1 = new Dustbin(1130, 600, 20, 180);
	log2 = new Dustbin(1330, 600, 20, 180);
	log3 = new Dustbin(1230, 680, 200, 20);
	paper = new Paper(100, 100, 20, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyCode === UP_ARROW) {
	  up();
  }
  
  go.display();
  log1.display();
  log2.display();
  log3.display();
  paper.display();

}

function up() {
	if(keyCode === UP_ARROW) {
		Matter.body.applyForce(paper.body, paper.body.position, {x : 85, y : 85})
	}
}
