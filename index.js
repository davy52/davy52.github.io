// Where is the circle
let p;

function setup() {
  	createCanvas(720, 720);
  	background(200);
	
	drawAxis();
	p = new particle(300, 300, 1, 0.5, 20);
	p.showColor(color(31, 219, 169));
}

function draw() {
	p.move();
	p.showColor(color(31, 219, 169));
}

function nFractal(z0, z1, z2, zt) {

}

function drawAxis() {
	strokeWeight(2);
	stroke(19, 66, 63);
	line(0, height/2, width, height/2);
	line(width/2, 0, width/2, height);
}