// Where is the circle
let ball;
let anchorPos;
let k, l0, l, g, force, mi;

function setup() {
	createCanvas(720, 720);
	strokeWeight(4);
	g = createVector(0, 100);
	mi = 1.01;
	ball = new RigidBall2d(50, 1, g, width/4, height, mi);
	anchorPos = createVector(width/2, 20);
	k = 5;
	l0 = 300;
	l = createVector(0, 0);
}

function draw() {
	background(200);
	ellipse(anchorPos.x, anchorPos.y, 7);
	l = p5.Vector.sub(ball.pos, anchorPos);
	force = p5.Vector.mult(p5.Vector.normalize(l), -1 * (p5.Vector.mag(l) - l0) * k);
	ball.applyForce(force);
	ball.update();
	line(anchorPos.x, anchorPos.y, ball.Pos().x, ball.Pos().y);
	ball.show();
}