
const maxpoints = 40;
let points = [];
let points_moveto = [];

let speed = 2;
let size = 200;
let random_r_min = 10;
let random_r_max = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < maxpoints; i++) {
    var angle = map(i, 0, maxpoints, 0, 2 * PI);
    var x = (width / 2) + cos(angle) * size;
    var y = (height / 2) + sin(angle) * size;
    points.push(createVector(x, y));
    points_moveto.push(randomVectorinRange(x, y, random_r_min, random_r_max));

  }
  rectMode(CENTER);
  background(0, 10);
  frameRate(100);
}

function draw() {
  background(0, 10);
  stroke(255, 199);
  noFill();
  //fill(255, 200);
  beginShape();
  for (var i = 0; i < points.length; i++) {
    vertex(points[i].x, points[i].y);
    // move points into the direction of target
    if (points[i].x < points_moveto[i].x) points[i].x += speed;
    if (points[i].x > points_moveto[i].x) points[i].x -= speed;
    if (points[i].y < points_moveto[i].y) points[i].y += speed;
    if (points[i].y > points_moveto[i].y) points[i].y -= speed;
    // are we close enough to the target?
    if (dist(points[i].x, points[i].y, points_moveto[i].x, points_moveto[i].y) <= (speed * 2.0)) {
      // create a new random target!
      points_moveto[i] = randomVectorinRange(points[i].x, points[i].y, random_r_min, random_r_max);
    }
  }
  endShape(CLOSE);
}

function randomVectorinRange(x, y, minr, maxr) {
  // create a random new point in a radius (minr,maxr) around a given point (x,y)
  let random_angle = random(PI * 2);
  let random_radius = random(minr, maxr);
  return createVector(x + (cos((random_angle)) * random_radius), y + (sin((random_angle)) * random_radius));
}

function windowResized() {
  // change canvas size on reize! 
  resizeCanvas(windowWidth, windowHeight);
}
