class RigidBall2d {
	constructor(size, mass, g, posx, posy, mi){
		this.size = size;
		this.mass = mass;
		this.pos = createVector(posx, posy);
		this.acc = createVector(0, 0);
		this.vel = createVector(0, 0);
		this.g = g;
		this.dampening = mi;
	}	

	applyForce(f) {
		this.acc = p5.Vector.mult(f, 1/this.mass);
		this.acc = p5.Vector.add(this.acc, g);
		//this.acc = p5.Vector.div(this.acc, this.dampening);
	}
 
	changePos(pos) {
		this.pos = pos;
		this.acc = createVector(0, 0);
		this.vel = createVector(0, 0);
	}


	update() {
		this.vel = p5.Vector.add(this.vel, p5.Vector.mult(this.acc, (deltaTime / 1000)));
		this.pos = p5.Vector.add(this.pos, p5.Vector.mult(this.vel, deltaTime/1000));
		this.vel = p5.Vector.div(this.vel, this.dampening);
	}

	show() {
		ellipse(this.pos.x, this.pos.y, this.size);
	}

	Pos() {
		return this.pos;
	}
}