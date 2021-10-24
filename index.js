// Where is the circle
let x, y, X, Y, i = 0;

function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(200);
  
  // Draw a circle
  stroke(50);
  fill(100);
  ellipse(X,  Y, 24, 24);
  
  // Jiggling randomly on the horizontal axis
  X = x + 100 *  sin(i * 0.025);
  // Moving up at a constant speed
  Y = y + 100 * sin(i * 0.025 + PI/2);
  i++; 
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}