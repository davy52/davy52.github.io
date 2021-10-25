// Where is the circle
let x, y, X, Y, i = 0;
let particle;

function setup() {
  createCanvas(720, 720);
  // Starts in the middle
  x = width / 2;
  y = height / 2;

  particle = new Particle(x, y, 0, 0, 20);
}

function draw() {
  background(200);
  
  X = x + 100 *  sin(i * 0.025);
  Y = y + 100 * sin(i * 0.025 + PI/2);
  i++; 
  particle.changePos(createVector(X, Y));
  particle.showColor(color(50, 168, 82));
}