
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,stone1,hammer1,rubber1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new plane(600,650,800,20);
	stone1 = new stone(400,600,70,70);

	hammer1 = new hammer(500,600,100,50);
	rubber1 = new rubber(600,600,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  stone1.display();
  hammer1.display();
  rubber1.display();

  drawSprites();
 
}



