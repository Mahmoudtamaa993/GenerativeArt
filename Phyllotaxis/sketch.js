var n = 0; // each frame I want to draw one Point 
var c =10;

function setup() {
createCanvas(800,800);
angleMode(DEGREES);
colorMode(HSB);
background(0);

}

function draw() {
  var a = n*50; // angle
  var r = c *sqrt(n); //radius

  var x = r*cos(a)+width/2; // convert angle to x
  var y = r*sin(a)+height/2; // convert radius to y
  print(x);
  fill((a-r)% 255,255,255);
  noStroke();
  ellipse(x, y, 2,2);

  n++;

}