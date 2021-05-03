let blocksize = 30;
let state = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
  for (var x = 0; x < int(width / blocksize); x++) {
    state[x] = [];
    for (var y = 0; y < int(height / blocksize); y++) {
      state[x][y] = 0;
    }
  }
}

function draw() {
  background(0);
  stroke(255);
  noFill();

  for (var y = 0; y < int(height / blocksize); y++) {
    var ypos = y * blocksize;
    for (var x = 0; x < int(width / blocksize); x++) {
      var xpos = x * blocksize;
      if (state[x][y] == 0) {
        line(xpos, ypos, xpos + blocksize, ypos + blocksize);
      }
      if (state[x][y] == 1) {
        line(xpos, ypos + blocksize, xpos + blocksize, ypos);
      }
      if (state[x][y] == 2) {
        ellipse(xpos + (blocksize / 2), ypos + (blocksize / 2), blocksize * 0.2, blocksize * 0.2);
      }

      if (int(random(3000)) == 0) {
        state[x][y] = int(random(4));
      }
    }
  }


}