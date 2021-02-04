
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var paper;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	
	//dustBin3.shapeColor=color("yellow");
	
	ground = new Ground(width/2,660,width,20);
	
	paper = new Paper(100,300,50);
	
	dustbin1 = new Dustbin(300,338,150,20);
	dustbin2 = new Dustbin(223,305,20,90);
	dustbin3 = new Dustbin(273,305,20,90);

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);
 
paper.display();
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
  }



