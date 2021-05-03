let rotationR = 10; // rotation in degree
let rotationL= 250;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0, 80); // set stroke transparency to 80%
}

function drawWing(gridSize,rotation) {
  // set gradient color
  let colorR = 255;
  let colorG = gridSize*2;
  let colorB = 255;
  // draw first ellipse 
  push(); // Save coordinate system
  fill (colorR, colorG, colorB);
  translate(gridSize/2, gridSize/2);  // Move origin to 0,0 
  
  ellipse(0, 0, gridSize, gridSize);  // draw Ellipse
  pop(); // Restore coordinate system  
  // as soon as gridsize is larger than 25, the circles should doubled, tranlate and rotate 
  if (gridSize>25) {      
    push(); // Save coordinate system
    translate(gridSize/2, gridSize/2);
    rotate(radians(rotationR));
    gridSize = gridSize / (sin(radians(rotationR)) + cos(radians(rotationR))); 
    drawWing(gridSize);
    pop();   // Restore coordinate system

    push(); // Save coordinate system
    translate(gridSize/2, gridSize/2);
    rotate(radians(-rotation));      
    gridSize = gridSize / (sin(radians(rotationR)) + cos(radians(rotationR))); 
    drawWing(gridSize);
    pop();    // Restore coordinate system
  }
  push(); // Save coordinate system
  fill (colorR, colorG, colorB);
  translate(gridSize/2, gridSize/2);  // Move origin to 0,0 
  
  ellipse(0, 0, gridSize, gridSize);  // draw Ellipse
  pop(); // Restore coordinate system  
  // as soon as gridsize is larger than 25, the circles should doubled, tranlate and rotate 
  if (gridSize>25) {      
    push(); // Save coordinate system
    translate(gridSize/2, gridSize/2);
    rotate(radians(rotation));
    gridSize = gridSize / (sin(radians(rotationL)) + cos(radians(rotationL))); 
    drawWing(gridSize);
    pop();   // Restore coordinate system

    push(); // Save coordinate system
    translate(gridSize/2, gridSize/2);
    rotate(radians(-rotationL));      
    gridSize = gridSize / (sin(radians(rotationL)) + cos(radians(rotationL))); 
    drawWing(gridSize);
    pop();    // Restore coordinate system
  }
  
}

function draw() {
  let mouseWidthPercent = (pmouseX / 600); // get Mouse width persent
  let rot = mouseWidthPercent * 32 ; // set new degree for rotation
  rotation = 10 + rot;  
  background(0);
  push(); // Save coordinate system
  translate(windowWidth/2, 100); 
  rotate(radians(-(mouseWidthPercent * 90))); // rotate max. for 90°
  drawWing(150,rotationR); // Restore coordinate system
  pop();
  push(); // Save coordinate system
  translate(350, rotationL); 
  rotate(radians-((mouseWidthPercent * 90))); // rotate max. for 90°
  drawWing(150,250); // Restore coordinate system
  pop();
}