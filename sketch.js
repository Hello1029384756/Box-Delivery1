var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxline1, boxline2, boxline3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	boxline1 = createSprite(400, 600, 200,10);
	boxline2 = createSprite(500,555,10,100);
	boxline3 = createSprite(300,555,10,100);

	packageSprite=createSprite(100, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX = 4;

	groundSprite=createSprite(width/2, height-5, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	var options ={
		restitution: 0.1
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxline = Bodies.rectangle(400,600,200,10, {isStatic:true});
	World.add(world, boxline);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}



