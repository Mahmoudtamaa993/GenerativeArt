let rotation; // rotation in degree
let bg;
var SetGuiVisible=true; 
function setup() {
  createCanvas(1200, 1200,WEBGL);
  gui = new dat.GUI();
  rotation = new Rotation();
  let bgFolder = gui.addFolder("WingColor");
  let Wingrotation= gui.addFolder("WingRotation");
  bg = {
    r: 0,
    g: 0,
    b: 0
  };
  bgFolder.add(bg, "r", 0, 255);
  bgFolder.add(bg, "g", 0, 255);
  bgFolder.add(bg, "b", 0, 255);
  Wingrotation.add(rotation,"d",10,30);
  bgFolder.open();
  Wingrotation.open();
  fill(200);
  stroke(255, 2, 255); // set stroke transparency to 80%
  strokeWeight(0.3);
  ellipseMode(CENTER);
  
}

function drawWing(gridSize) {
  // set gradient color
  let colorR = bg.r;
  let colorG = bg.g;
  let colorB = bg.b;
  // draw first ellipse 
  push(); // Save coordinate system
  fill (colorR, colorG, colorB);
  translate(gridSize/3, gridSize/3);  // Move origin to 0,0 
  ellipse(0, 0, gridSize, gridSize);  // draw Ellipse
  pop(); // Restore coordinate system  
  // as soon as gridsize is larger than 25, the circles should doubled, tranlate and rotate 
  if (gridSize>25) {      
    push(); // Save coordinate system
    translate(gridSize/2, gridSize/2);
    rotate(radians(rotation.d));
    gridSize = gridSize / (sin(radians(rotation.d)) + cos(radians(rotation.d))); 
    drawWing(gridSize);
    pop();   // Restore coordinate system

    push(); // Save coordinate system
    translate(gridSize/2, gridSize/2);
    rotate(radians(-rotation.d));      
    gridSize = gridSize / (sin(radians(rotation.d)) + cos(radians(rotation.d))); 
    drawWing(gridSize);
    pop();    // Restore coordinate system
  } 
}

function draw() {
  let mouseWidthPercent = (pmouseX / 600); // get Mouse width persent  
  rotation.d = rotation.d;  
  background(0);  
  push(); // Save coordinate system
  translate(0,0);   
  rotate(radians(90)); // rotate max. for 90°
  drawWing(150); // Restore coordinate system
  pop();
  push(); // Save coordinate system
  translate(-60,70);
  rotateX(60); // rotate max. for 90°
  drawWing(150); // Restore coordinate system
  pop();
}
function Rotation(){
  this.d = 10;
}

function keyReleased(){
if (key ==' '){
  if (SetGuiVisible== true){
    SetGuiVisible = false;
    gui.hide();
  }else if (SetGuiVisible == false){
    SetGuiVisible== true;
    gui.show();
  }
}

}