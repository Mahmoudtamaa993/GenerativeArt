var punkteProZeile = 5;
var rand = 100;
var quadratGroesse = 2;
var zaehler = 5;

function setup() {
  createCanvas(700, 700);
  rectMode(CENTER);
  farbe_links = color(0, 0, 255);
  farbe_rechts = color(0, 235, 0);
}

function draw() {
  // print("mouseY = "+ mouseY);
  punkteProZeile = int(map(mouseX, 0, width, 3, 10));
  quadratGroesse = map(mouseY, 0, height, 100, 1);
  background(128);
  stroke(255);
  rectMode(CENTER);
  strokeWeight(1);
  for (var x = 0; x < punkteProZeile; x++) {
    var xPos = map(x, 0, punkteProZeile - 1, rand, width - rand);
    for (var y = 0; y < punkteProZeile; y++) {
      var yPos = map(y, 0, punkteProZeile - 1, rand, height - rand);
      var farbe_mix = lerpColor(farbe_links, farbe_rechts, map(x, 0, punkteProZeile-1, 0.0, 1.0));
      fill(farbe_mix);
      rect(xPos, yPos, quadratGroesse, quadratGroesse);
    }
  }
  zaehler++;
}