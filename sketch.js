function setup() {
  createCanvas(800,400);
  moving=createSprite(400,200,200,45)
  moving.shapeColor="pink"
  fixed=createSprite(400,200,45,200)
  fixed.shapeColor="lightblue"
  moving.debug=true
  fixed.debug=true
}

function draw() {
  background(255,255,255);  
  drawSprites();
moving.x=mouseX
moving.y=mouseY

if(moving.x-fixed.x<moving.width/2+fixed.width/2&&fixed.x-moving.x<moving.width/2+fixed.width/2){
  moving.shapeColor=rgb(223,170,255)
  fixed.shapeColor="lightgreen"
}
else{
  moving.shapeColor="pink"
  fixed.shapeColor="lightblue"
}
 if(  moving.y-fixed.y<moving.height/2+fixed.height/2&&fixed.y-moving.y<moving.height/2+fixed.height/2) {
  moving.shapeColor="green"
  fixed.shapeColor= "red"
}
else{
  moving.shapeColor="pink"
  fixed.shapeColor="lightblue"
}










}