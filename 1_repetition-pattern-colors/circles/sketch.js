
var pointsPerCircle = 100;
var radius = 300;
var drehung = 0;
var t = 0;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
  frameRate(25);
}

function draw() {
background(255);  
 /*
  if (t%3 == 0)  background(255,0,0);
  if (t%3 == 1)  background(0,255,0);
  if (t%3 == 2)  background(0,0,255);
*/
  for (var winkel = 0; winkel < 360; winkel = winkel + (360 / pointsPerCircle)) {
    var xpos = cos(winkel + drehung) * radius;
    var ypos = sin(winkel + drehung) * radius;
    line(width / 2, height / 2, (width / 2) + xpos, (height / 2) + ypos);
  }
  drehung = drehung+0.2; //map(mouseX,0,width-1,-10,10);
  //radius = mouseY/2;
   radius = 250 +(200 * sin(millis()*0.1));
   t++;
}