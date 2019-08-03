function circle(x, y, radius, colour="green", fill = true) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2*Math.PI,true);
	ctx.fillStyle = colour;
	ctx.strokeStyle = "black"
	ctx.lineWidth = radius/15;
	if (fill) {
		ctx.fill();
	}
	ctx.stroke();
}

function line(x1, y1, x2, y2, colour = "black") {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle=colour;
	ctx.stroke();
}

function square(x1, y1, x2, y2, colour = "black") {
	ctx.fillStyle = colour;
	ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
}
