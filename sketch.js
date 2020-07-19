
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var side1, side2, bottom;
var paper1;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);

side1= new Dustbin(600,640,10,90);
side2= new Dustbin(770,640,10,90);
bottom= new Dustbin(680,680,170,10);
paper1= new Paper(90,699,30);

  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ground.display();
  side1.display();
  side2.display();
  bottom.display();
  paper1.display();

  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:85});
  }
}


