
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Ground(400,100,400,20)

	Engine.run(engine);
  
}


function draw() {
	background("white");
	
  rectMode(CENTER);
  
  roof.display();
  drawSprites();
 
}



