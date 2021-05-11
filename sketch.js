
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var playerIMG;
var player;
var bgIMG
var bg;
var ground1;
var engine;
var world;
function preload()
{
	playerIMG = loadImage("player2.gif");
	bgIMG = loadImage("sky.gif")

}

function setup() {
	createCanvas(700,400);
 bg =  createSprite(350,200,50,50);
 bg.scale = 1.55;
 bg.addImage(bgIMG);

 ground1 = new Ground(200,300,500,15);


	engine = Engine.create();
	world = engine.world;

	player = createSprite(200,200,50,50);
	player.addImage(playerIMG);
    player.scale = 0.1;

	Engine.run(engine);
  
}


function draw() {
	background(220)
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



