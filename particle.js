class Particle {
	constructor (x, y, vx, vy, size) {
		this.pos = createVector(x, y);
		this.vel = createVector(vx, vy);
		this.size = size;
	}

	changeVel(nVel) {
		this.vel = nVel;
	}

	addVel(nVel) {
		this.vel += nVel;
	}

	move() {
		this.pos += this.vel;
	}

	changePos(nPos) {
		this.pos = nPos;
	}

	showColor(color) {
		noStroke();
		fill(color);
		ellipse(this.pos.x, this.pos.y, this.size);
	}
}