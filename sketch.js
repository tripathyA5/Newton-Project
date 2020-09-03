
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
bob1=new Bob(100,600,30);
bob2=new Bob(150,600,30);
bob3=new Bob(200,600,30);
bob4=new Bob(250,600,30);
bob5=new Bob(300,600,30);
roof1=new Roof();
chain1=new Chain(bob1.body,roof1.body,-80,0);
chain2=new Chain(bob2.body,roof1.body,-80,0)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
roof1.display();
chain1.display();
}



