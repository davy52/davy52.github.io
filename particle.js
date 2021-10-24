class particle{
	constructor(x, y, vx = 0, vy = 0, size = 1) {
		this.pos = createVector(x, y);
		this.vel = createVector(vx, vy);
		this.size = size;
	}

	showColor(color) {
		noStroke();
		fill(color);
		ellipse(this.pos.x, this.pos.y, this.size);
	}

	move() {
		this.pos.add(this.vel);
	}
}