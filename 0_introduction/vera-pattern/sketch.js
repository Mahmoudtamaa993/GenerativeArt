/*
  Ralf Baecker 2021
  vera molnars quadrat
*/

var maxpoints = 4; // wieviele punkte
var margin = 100; // wieviel rand (open, unten, rechts, links)

function setup() {
  createCanvas(600,600); // wie gross ist die zeichenfläche
}

function draw() {
  background(0); // hintergrundfarbe
  stroke(255); // stiftfarbe
  strokeWeight(3); // stiftdicke
  for (var y= 0; y<maxpoints;y++) { // für jede zeile
    for (var x= 0; x<maxpoints;x++) { // für jede spalte
      point(map(x,0,maxpoints-1,margin,width-margin),map(y,0,maxpoints-1,margin,width-margin)); 
    }
  }
}