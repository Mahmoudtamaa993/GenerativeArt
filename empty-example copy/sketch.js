/*
 * @name Recursive Tree
 * @description Renders a simple tree-like structure via recursion.
 * The branching angle is calculated as a function of the horizontal mouse
 * location. Move the mouse left and right to change the angle.
 * Based on Daniel Shiffman's <a href="https://processing.org/examples/tree.html">Recursive Tree Example</a> for Processing.
 */
let theta;

function setup() {
  createCanvas(710, 400);
}

function draw() {
  background(0);
  frameRate(30);
  stroke(255);
  // Let's pick an angle 0 to 90 degrees based on the mouse position
  let a = (mouseX / width) * 90;
  // Convert it to radians
  theta = radians(a);
  // Start the tree from the bottom of the screen
  translate(width/2,height);
  // Draw a line 120 pixels
  ellipse(0,0, 20,20);
  // Move to the end of that line
  translate(0,-120);
  // Start the recursive branching!
  branch(120);

}

function branch(h) {
  // Each branch will be 2/3rds the size of the previous one
  h *= 0.66;

  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 2 pixels or less
  if (h > 2) {
    push();    // Save the current state of transformation (i.e. where are we now)
    rotate(theta);   // Rotate by theta
    line(0, 0, 0, -h);  // Draw the branch
    ellipse(0,0, 20,20);
    translate(0, -h); // Move to the end of the branch
    branch(h);       // Ok, now call myself to draw two new branches!!
    pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

    // Repeat the same thing, only branch off to the "left" this time!
    push();
    rotate(-theta);
    line(0, 0, 0, -h);
    ellipse(0,0, 20,20);
    translate(0, -h);
    branch(h);
    pop();
  }
}
