
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var world,boy,engine;
function preload(){
	boy=loadImage("images/boy.png");
    mango=loadImage("images/mango.png");
	stone=loadImage("images/stone.png");
	tree=loadImage("images/tree.png");
}
function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
    treeObj=new tree(1050,580);
	mango1=new mango(1100,100,30);
	mango2=new mango(1100,150,30);
	mango3=new mango(1120,100,30);
	mango4=new mango(1120,150,30);
	mango5=new mango(1130,100,30);
	groundo=new ground(width/2,600,width,20);
	 Juno=new boy(width/2,580);
	 Stones=new Stone( 235,420);
	 Slings=new sling( Juno.body,{ x:200,y:100});
	Engine.run(engine);
}
function draw() {
background(230);
Engine.update(engine);
function detectCollision(lstone,lmango){
mangoBodyPosition=lmango;
StonesBodyPosition=lstone;
var distance=dist( stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if( distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}
function keyPressed(){
	if( keyCode===32){
		Matter.Body.setPosition(Stones.body,{ x:235,y:420} );
		launherObject.attach();
	}
}
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  groundo.display();
  Juno.display();
  Stones.display();
  Slings.display();
}
function mouseDragged(){
    Matter.Body.setPosition( Stones.body,{ x:mouseX,y:mouseY});
}
function mouseReleased(){
    Slings.fly();
}