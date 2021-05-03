/*

marching squares in P5js
by Dylan Greene
from https://codepen.io/dylangggg/pen/WNrVGYG
 
made after reading http://jamie-wong.com/2014/08/19/metaballs-and-marching-squares/

*/
let circles = [];
let gridPoints = [];

const NUM_BALLS = 6;
const RES = 16;
const HALF_RES = RES * 0.5;

function setup() {
	createCanvas(windowWidth,windowHeight);
	
	for(let i = 0; i < NUM_BALLS; i++) {
		circles.push(new MovingCircle());
	}
	
	const cols = width / RES + 1;
	const rows = height / RES + 1;
	for(let x = 0; x < cols; x++) {
		let rowArray = [];
		for(let y = 0; y < rows; y++) {
			rowArray.push(new Point(x * RES, y * RES));
		}
		gridPoints.push(rowArray);
	}
	
	// strokeCap(SQUARE);
}


function draw() {
	background(255);
	
	for(let i = 0; i < gridPoints.length; i++) {
		for(let j = 0; j < gridPoints[0].length; j++) {
			gridPoints[i][j].update();
		//	 gridPoints[i][j].drawDebug();
		}
	}
	stroke(0,0,255);
	
	for(let i = 0; i < gridPoints.length - 1; i++) {
		for(let j = 0; j < gridPoints[0].length - 1; j++) {
			const point1 = gridPoints[i][j].value;
			const point2 = gridPoints[i+1][j].value;
			const point3 = gridPoints[i+1][j+1].value;
			const point4 = gridPoints[i][j+1].value;
					
			const { x, y } = gridPoints[i][j];
			const binary = (point1 > 1 ? '1' : '0') + (point2 > 1 ? '1' : '0') + (point3 > 1 ? '1' : '0') + (point4 > 1 ? '1' : '0');
      switch(binary) {
				case '0000': {
					// 00
					// 00
					break;
				}
				case '0001': {
					const value1 = interpolate(y, point1, point4);
					const value2 = interpolate(x, point4, point3);
					
          line(x, value1, value2, y + RES);
					// 00
					// 10
					break;
				}
				case '0010': {
					const value1 = interpolate(x, point4, point3);
					const value2 = interpolate(y, point2, point3);
					line(value1, y + RES, x + RES, value2);
					// 00
					// 01
					break;
				}
				case '0011': {
					const value1 = interpolate(y, point1, point4);
					const value2 = interpolate(y, point2, point3);
					line(x, value1, x + RES, value2);
					// 00
					// 11
					break;
				}
				case '0100': {
					const value1 = interpolate(x, point1, point2);
					const value2 = interpolate(y, point2, point3);
					line(value1, y, x + RES, value2);
					// 01
					// 00
					break;
				}
				case '0101': {
					const value1 = interpolate(x, point1, point2);
					const value2 = interpolate(y, point1, point4);
					line(x, value2, value1, y);
					const value3 = interpolate(x, point4, point3);
					const value4 = interpolate(y, point2, point3);
					line(value3, y + RES, x + RES, value4);
					// 01
					// 10
					break;
				}
				case '0110': {
					const value1 = interpolate(x, point1, point2);
					const value2 = interpolate(x, point4, point3);
					line(value1, y, value2, y + RES);
					// 01
					// 01
					break;
				}
				case '0111': {
					const value1 = interpolate(x, point1, point2);
					const value2 = interpolate(y, point1, point4);
					line(x, value2, value1, y);
					// 01
					// 11
					break;
				}
				case '1000': {
					const value1 = interpolate(x, point1, point2);
					const value2 = interpolate(y, point1, point4);
					line(x, value2, value1, y);
					// 10
					// 00
					break;
				}
				case '1001': {
					const value1 = interpolate(x, point1, point2);
					const value2 = interpolate(x, point4, point3);
					line(value1, y, value2, y + RES);
					// 10
					// 10
					break;
				}
				case '1010': {
					const value1 = interpolate(x, point4, point3);
					const value2 = interpolate(y, point1, point4);
					line(x, value2, value1, y + RES);
					const value3 = interpolate(x, point1, point2);
					const value4 = interpolate(y, point2, point3);
					line(value3, y, x + RES, value4);
					// 10
					// 01
					break;
				}
				case '1011': {
					const value1 = interpolate(x, point1, point2);
					const value2 = interpolate(y, point2, point3);
					line(value1, y, x + RES, value2);
					// 10
					// 11
					break;
				}
				case '1100': {
					const value1 = interpolate(y, point1, point4);
					const value2 = interpolate(y, point2, point3);
					line(x, value1, x + RES, value2);
					// 11
					// 00
					break;
				}
				case '1101': {
					const value1 = interpolate(y, point2, point3);
					const value2 = interpolate(x, point4, point3);
					line(value2, y + RES, x + RES, value1);
					// 11
					// 10
					break;
				}
				case '1110': {
					const value1 = interpolate(x, point4, point3);
					const value2 = interpolate(y, point1, point4);
					line(x, value2, value1, y + RES);
					// 11
					// 01
					break;
				}
				case '1111': {
					// 11
					// 11
					break;
				}
			}
		}
	}
	
	circles.forEach((item) => {
		item.update();
	});
}

function MovingCircle() {
	this.d = Math.random() * 128 + 64;
	this.r = this.d * 0.5;
	
	this.x = Math.random() * (width * 0.5) + width * 0.25;
	this.y = Math.random() * (height * 0.5) + height * 0.25;
	
	this.moveX = (Math.random() * 4) - 2.0;
	this.moveY = (Math.random() * 4) - 2.0;
	
	this.update = function() {
		this.x += this.moveX;
		this.y += this.moveY;
		
		if(Math.abs(width - this.x) < this.r || this.x < this.r) {
			this.moveX *= -1;
		}
		
		if(Math.abs(height - this.y) < this.r || this.y < this.r) {
			this.moveY *= -1;
		}
	}
	
	this.drawDebug = function() {
		noFill();
		stroke(0);
		circle(this.x, this.y, this.d, this.d);
	}
}

function Point(x, y) {
	this.x = x;
	this.y = y;
	this.value = 0;
	
	this.update = function() {
		let value = 0;
		circles.forEach((item) => {
			value += (item.r * item.r) / ((this.x - item.x) * (this.x - item.x) + (this.y - item.y) * (this.y - item.y));
		});
		
		this.value = value;
	}
	
	this.drawDebug = function() {
		stroke(0);
		noFill();
		rect(this.x - 2, this.y - 2, 4, 4);
		line(this.x, this.y, this.x + RES, this.y);
		line(this.x, this.y, this.x, this.y + RES);
		
		if(this.value > 1) {
			noStroke();
			fill('#32CD32');
			rect(this.x - 4, this.y - 4, RES, RES);
		}
	}
}



function interpolate(val1, fval1, fval2) {
	return val1 + (val1 + RES - val1) * ((1 - fval1) / (fval2 - fval1))
}