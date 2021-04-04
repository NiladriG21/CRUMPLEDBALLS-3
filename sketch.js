const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var dustbinObj, paperObject,groundObject, launcherObject	
var world;
var launchingForce=100;
var lastMouseX=null;
var lastMouseY=null;


function setup() {
	createCanvas(1350, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(400,350,70);
	groundObject=new ground(width/2,600,width,20);
	dustbinObj=new dustbin(1200,580);
	
	launcherObject=new launcher(paperObject.body,{x:460,y:300})
	

	

	Engine.run(engine);

  
}


function draw() {
  
  background(230);
 
  Engine.update(engine)
  
    paperObject.display();
 
  
  groundObject.display();
  dustbinObj.display();
  
  launcherObject.display();
  
 
  
  
 
}


function mouseDragged()
{
	Matter.Body.setPosition(paperObject.body, {x:mouseX, y:mouseY})
  
}

function mouseReleased()
{
	
	launcherObject.fly();
 
}
