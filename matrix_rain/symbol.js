var charList = [];
for(x = 0; x < 60; x++){
	charList.push(0x07c0 + x);
}
for(x = 0; x <= 96; x++){
	charList.push(0x30a0 + x);
}
for(x = 0; x <= 65; x++){
	charList.push(0x0030 + x);
}

class Character {
	constructor(x, y, size, speed){
		this.pos = createVector(x, y);
		this.symbolSize = size;
		this.speed = speed;
		this.value = String.fromCharCode(random(charList));
	}

	setRandomVal(){
		this.value = String.fromCharCode(random(charList));
	}

	render(){
		if(this.pos.y >= height){
			this.pos.y = 0;
		}

		if(random(0, 6) <= 1){
			this.setRandomVal();
		}
		fill(0, 240, 80);
		textSize(this.symbolSize);
		text(this.value, this.pos.x, this.pos.y);
		this.pos.y += this.speed;
	}
}