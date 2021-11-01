var symbolSize = 18;
var spacing = 2;
var streams = [];

function setup() {
	createCanvas(window.innerWidth, 800);
	for(var x = spacing; x <= width - symbolSize; x+=(symbolSize + spacing)){
		let s = new Stream(
			symbolSize,
			x,
			random(2, 10),
			random(-1000, 0)
		);
		streams.push(s);
	}
	background(0, 255);
}

function draw() {
	background(0, 200);
	streams.forEach(stream => {
		stream.render();	
	});
}