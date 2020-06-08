const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var Ground,Paper,dustbin1,dustImg;
function preload()
{
	dustImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(window.innerWidth,window.innerHeight);


	engine = Engine.create();
	world = engine.world;

	Ground = new ground(window.innerWidth/2,650,window.innerWidth,20);

    Paper = new paper(100,100);

	dustbin1 = new dustbin(1300,490,20,300);
	dustbin2 = new dustbin(1000,490,20,300);

	dustbin3 = new dustbin(1150,490,10,10);
	



	Engine.run(engine);
  
}


function draw() {
  background(225);

  Ground.display();
  Paper.display();
  dustbin1.display();
  dustbin2.display();
  push();
  dustbin3.display();
  image(dustImg,1150,490,370,320);
  pop();
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.applyForce(Paper.body,{x:Paper.body.position.x,y:Paper.body.position.y},{x:1,y:-1});
	}

}



