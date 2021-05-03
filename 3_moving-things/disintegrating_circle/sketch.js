
const maxpoints = 90;
let points = [];
let speed = 1;
let size = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < maxpoints; i++) {
    var angle = map (i,0,maxpoints,0,360);
    var x = (width/2) + cos(radians(angle))*size;
    var y = (height/2) + sin(radians(angle))*size;
    let p = createVector(x,y );
    points.push(p);
  }
  rectMode(CENTER);
  background(0);
  frameRate(100);
}

function draw() {
  background(0,255);
  stroke(255);
  noFill();
  fill(255,200);
  beginShape();
  let allout = 0;
  for (var i = 0; i < points.length; i++) {
    let p = points[i];
    vertex(p.x, p.y);
    p.x = p.x + random(-speed, speed);
    p.y = p.y + random(-speed, speed);
  }
  endShape(CLOSE);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}