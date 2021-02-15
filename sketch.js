
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var plane1;
var stone1;
var rubber1;
var sand1;
var sand2;
var sand3;
var sand4;
var sand5;
var sand6;
var iron1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer1 = new Hammer (100,100);
	plane1 = new Plane(600, height, 1200, 20);
    stone1 = new Stone(300,320,70,70);
    rubber1 = new Rubber(700,600,70 ,90);
	sand1 = new Sand(500,500,20,20);
    sand2 = new Sand(200,200,20,20);
    sand3 = new Sand(550,550,20,20);
    sand4 = new Sand(250,250,20,20);
    sand5 = new Sand(180,180,20,20);
	sand6 = new Sand(570,570,20,20);
	iron1 = new Iron(100,150,50,50);

	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background("green");

  hammer1.display();
  plane1.display();
  stone1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  iron1.display();

  drawSprites();
 
}



