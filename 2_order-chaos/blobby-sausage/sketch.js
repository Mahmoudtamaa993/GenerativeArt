/*
   blobby-sausage
*/

let resolution = 290;
let radius = 200;
let noiseamp = 100;
let offset = 0;

function setup() {
  createCanvas(windowWidth,windowHeight); // wie gross ist die zeichenfläche
  noiseDetail(2.8, 0);
  background(255); // hintergrundfarbe

}

function draw() {
//  background(255,3); // hintergrundfarbe
  fill(0,0,255,200);
  stroke(0,255,255,100)


  beginShape();
  for (var angle = 0; angle < TWO_PI; angle += TWO_PI / resolution) {
    radius = 50 + (noise(millis()*0.0001)*200);
    var noiseval = map(noise(100 +cos(angle+(millis()*0.0001)), 100+ sin(angle+(millis()*0.0001)), millis() * 0.0003), 0, 1, -noiseamp, noiseamp);
    var x = (map(noise(millis()*0.0002,100),0,1,-100,100) + (width / 2)) + (cos(angle) *( radius + noiseval))  ;
    var y =( map(noise(millis()*0.0002,0),0,1,-100,100) + (height / 2)) + (sin(angle) * (radius+ noiseval))  ;
    vertex(x, y);
  }
  endShape(CLOSE)
}