const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var stone

function preload(){

	treeimg=loadImage("tree.png")
	mangoimg=loadImage("mango.png")
	boyimg=loadImage("boy.png")
	stoneimg=loadImage("stone.png")

}

function setup() {

	createCanvas(1600, 850);

    engine = Engine.create();
	world = engine.world;

	tree=createSprite(1200,430, 50,50)
	tree.addImage("b",treeimg)
	tree.scale=0.7

	mango1=createSprite(1150,400,20,20)
	mango1.addImage("b",mangoimg)
	mango1.scale=0.2

	mango2=createSprite(1250,250,20,20)
	mango2.addImage("b",mangoimg)
	mango2.scale=0.2

	mango3=createSprite(1370,400,20,20)
	mango3.addImage("b",mangoimg)
	mango3.scale=0.2

	mango4=createSprite(900,350,20,20)
	mango4.addImage("b",mangoimg)
	mango4.scale=0.2

	mango5=createSprite(1100,100,20,20)
	mango5.addImage("b",mangoimg)
	mango5.scale=0.2

	mango6=createSprite(1350,130,20,20)
	mango6.addImage("b",mangoimg)
	mango6.scale=0.2

	mango7=createSprite(1000,250,20,20)
	mango7.addImage("b",mangoimg)
	mango7.scale=0.2

	mango8=createSprite(1500,300,20,20)
	mango8.addImage("b",mangoimg)
	mango8.scale=0.2

	// //boy=createSprite(200,750,20,20)
	// boy.addImage("c",boyimg)
	// boy.scale=0.2

	
	stone=new Rock(100,630)

	constrain=new Rope(stone.body,{x:100,y:600})



    Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

  background(128,128,128);

  text(mouseX+","+mouseY,mouseX,mouseY)
  
  tree.display()

  image(boyimg,20,480,500,500)

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()

  stone.display()

  constrain.display()

  
  drawSprites()
 
}

function mouseDragged(){
	
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	
}

function mouseReleased(){
	constrain.detach()
}
