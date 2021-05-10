const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var ground;
var paper;
var dustbin;

function setup(){
	createCanvas(1600,500);
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2,490,width,20);
	paper = new Paper(170,height/2,35);
	dustbin = new Dustbin(1400,height-20-333/2, 276, 333);
}

function draw() {
  background(255);
  Engine.update(engine);

  keyPressed();

  ground.display();
  paper.display();
  dustbin.display();
}

function keyPressed(){
	if(keyIsDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:96,y:-80});
	}
}