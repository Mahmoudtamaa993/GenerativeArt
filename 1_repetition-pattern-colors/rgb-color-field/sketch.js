/*
  rgb color field
*/

var maxpoints = 6; // wieviele punkte
var margin = 60; // wieviel rand
var boxsize = 90;
//var color_top_left, color_top_right, color_bottom_left, color_bottom_right;


function setup() {
  createCanvas(600, 600); // wie gross ist die zeichenfläche
  rectMode(CENTER);
  color_top_left = color(255, 0, 0); // rot
  color_top_right = color(0, 255, 0); // grün
  color_bottom_left = color(255,255,0); // gelb
  color_bottom_right = color(0, 0, 255); // blau
}

function draw() {
  background(255); // hintergrundfarbe
  noStroke();
  for (var x = 0; x < maxpoints; x++) {
    var color_top_mix = lerpColor(color_top_left, color_top_right, map(x, 0, maxpoints - 1, 0, 1.0));
    var color_bottom_mix = lerpColor(color_bottom_left, color_bottom_right, map(x, 0, maxpoints - 1, 0, 1.0));
    for (var y = 0; y < maxpoints; y++) {
      var xpos = map(x, 0, maxpoints - 1, margin, width - margin);
      var ypos = map(y, 0, maxpoints - 1, margin, width - margin);
      var intercolor = lerpColor(color_top_mix, color_bottom_mix, map(y, 0, maxpoints - 1, 0, 1.0));
      fill(intercolor);
      rect(xpos, ypos, boxsize, boxsize);
    }
  }
}