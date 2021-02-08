
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer;
var stone;
var rubber;
var sand;

function setup() {
	createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(0, 790, 1600, 50);

  hammer = new Hammer(400, 600, 90, 20);

  stone = new Stone(200, 700, 30, 30);

  rubber = new Rubber(700, 745, 50, 40);

  sand = new Sand(500, 745, 50, 40);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("cyan");

  Engine.update(engine);

  ground.display();
  
  hammer.display();
  
  rubber.display();
  
  stone.display();

  sand.display();
  
  //drawSprites();
 
}



