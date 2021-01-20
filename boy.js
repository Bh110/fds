class boy{
constructor(x, y, width, height) {
var options = {
    isStatic=false,
'restitution':0,
'friction':1,
'density':1}
this.width= width;
this.height= height;
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height, options);
this.image=loadImage("images/boy.png");
World.add(world, this.body);
}
display(){
push();
translate(this.body.position.x, this.body.position.y);
imageMode(CENTER);
ellipseMode( RADIUS);
image(this.image, this.x,this.y, this.width, this.height);
pop();
}
}