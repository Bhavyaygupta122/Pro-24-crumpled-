var paper, dustBin;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(80, 360, 25);

	Dustbin1 = new Dustbin(650, 460, 20, 100);
	Dustbin2 = new Dustbin(480, 460, 20, 100);
	Dustbin3 = new Dustbin(565, 500, 150, 20);

	ground = new Ground(400, 520, 800, 20);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  paper.display();

  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display(); 
  ground.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-95});
	}
}

