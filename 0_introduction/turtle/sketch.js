/*
code example from here
https://compform.net/turtles/

*/

var myTurtle;

function setup() {
	createCanvas(500, 500);
	myTurtle = new Turtle();
}

function draw() {
	background(50);

	noFill();
	stroke(255, 255, 255, 180);
	strokeWeight(2);


	// move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.moveTo(250, 250);

	// put the pen down to draw
	myTurtle.penDown();


	myTurtle.moveForward(100);
	myTurtle.turnRight(90);
	myTurtle.moveForward(100);
	myTurtle.turnRight(90);
	myTurtle.moveForward(100);
	myTurtle.turnRight(90);
	myTurtle.moveForward(100);
	noLoop();
}
