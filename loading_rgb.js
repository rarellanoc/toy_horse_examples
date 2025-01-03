let giro = 0;

function setup() {
  createCanvas(500, 500);
  background(20);
}

function draw() {

  for(let i=0; i<3; i++) {
  giro = giro + 0.02;
  background(20);
  rectMode(CENTER);
  noFill();
  stroke(255,10,10);
  strokeWeight(4);
  push();
  translate((i*50),(100));
  rotate(giro);
  rect(0,0,50,50);
  pop();
    
    
    push();
  translate((i*50)+100,(100));
  rotate(giro);
    stroke(20,255,10);
  rect(0,0,50,50);
  
  pop();
    
    push();
  translate((i*50)+200,(100));
  rotate(giro);
    stroke(20,10,255);
  rect(0,0,50,50);
  
  pop();
    
  }
}
