function circle(x, y, radius, colour="green", fill = true) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2*Math.PI,true);
	ctx.fillStyle = colour;
	ctx.strokeStyle = "black"
	ctx.strokeStyle = colour;
	ctx.lineWidth = radius/15;
	if (fill) {
		ctx.fill();
	} else {
		ctx.stroke();
	}
}

function line(x1, y1, x2, y2, colour = "black", width="10") {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle=colour;
	ctx.lineWidth = width;
	ctx.stroke();
}

function square(x1, y1, x2, y2, colour = "black") {
	ctx.fillStyle = colour;
	ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
}

function arrow(x, y, length, colour = "black") {
	line(x, y, x - length, y + length/2, colour, length/3);
	line(x, y, x + length, y + length/2, colour, length/3);
}