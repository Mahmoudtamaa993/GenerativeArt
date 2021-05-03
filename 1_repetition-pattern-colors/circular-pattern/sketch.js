/*
  round pattern
*/
var count_inner = 1;
var count_outer = 40;
var radius_max = 280;
var radius_steps = 10;
function setup() {
  createCanvas(600, 600); // wie gross ist die zeichenfläche
}

function draw() {
  background(0); // hintergrundfarbe
  noFill();
  stroke(255);
  strokeWeight(3);

  for (var r = 0; r < radius_steps; r++) {
    var circle_elements = int(map(r, 0, radius_steps - 1, count_inner, count_outer));
    for (var c = 0; c < circle_elements; c++) {
      var radius = map(r, 0, radius_steps, 0, radius_max);
      var angle = map(c,0,circle_elements-1,0,2*PI);
      var xpos = (width/2) + cos(angle)*radius;
      var ypos = (height/2) + sin(angle)*radius;
      point(xpos,ypos);
    }
  }
}