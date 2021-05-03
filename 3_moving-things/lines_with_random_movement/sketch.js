
let x1, y1 , x2, y2;
let x1_target, y1_target , x2_target, y2_target;
let r = 0;
let g = 0;
let b = 0;
let r_target, g_target,b_target;


let speed = 0.04;
let color_speed = 0.03;
let range = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = random(windowWidth);
  y1 = random(windowHeight);
  x2 = random(windowWidth);
  y2 = random(windowHeight);

  x1_target = random(windowWidth);
  y1_target = random(windowHeight);

  x2_target = random(windowWidth);
  y2_target = random(windowHeight);
  r_target = random(255);
  g_target = random(255);
  b_target = random(255);
}

function draw() {
 //  background(255, 255, 255);
 r = (r*(1.0-color_speed)) + (r_target*(color_speed));
 g = (g*(1.0-color_speed)) + (g_target*(color_speed));
 b = (b*(1.0-color_speed)) + (b_target*(color_speed));
  x1 = (x1 * (1.0 - speed)) + (x1_target * (speed));
  x2 = (x2 * (1.0 - speed)) + (x2_target * (speed));
  y1 = (y1 * (1.0 - speed)) + (y1_target * (speed));
  y2 = (y2 * (1.0 - speed)) + (y2_target * (speed));

  if ((abs(r-r_target)< 5 ) && (abs(g-g_target)<5) && (abs(b-b_target)<5)) {
    r_target = random(255);
    g_target = random(255);
    b_target = random(255);
  

  }
  if (dist(x1, y1, x1_target, y1_target) < 10) {
    x1_target = constrain( x2 + random(-range,range),0,windowWidth);
    y1_target = constrain( y2 + random(-range,range),0,windowHeight);
  }
  if (dist(x2, y2, x2_target, y2_target) < 10) {
    x2_target = constrain( x1 + random(-range,range),0,windowWidth);
    y2_target =  constrain( y1 + random(-range,range),0,windowHeight);
  }

  noFill();
  stroke(r, g, b,128);
  line(x1, y1, x2, y2);
}