class Stream{
	constructor(size, x, speed, startingY){
		this.startingY = startingY;
		this.speed = speed;
		this.posx = x;
		this.symbolSize = size;
		this.numOfSymbols = random(3, 25);
		this.symbols = [];
		for(let i = 0; i < this.numOfSymbols; i++){
			let c = new Character(
				this.posx,
				-1 * i * this.symbolSize + this.startingY,
				this.symbolSize,
				this.speed
				);
			this.symbols.push(c);
		}
	}

	render(){
		this.symbols.forEach(element => {
			element.render();
		});
	}
}