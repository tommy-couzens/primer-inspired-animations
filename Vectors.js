//define vectors
// It may be worth copy victors for things like angles
// Code: https://github.com/maxkueng/victor
// Documentation: http://victorjs.org

let Vector = function(x, y) {
	this.x = x;
	this.y = y;
}
Vector.prototype.add = function(vector) {
	this.x += vector.x
	this.y += vector.y
	return this
};

Vector.prototype.plus = function(vector) {
	return new Vector(this.x + vector.x, this.y + vector.y)
};

Vector.prototype.minus = function(vector) {
	this.x -= vector.x
	this.y -= vector.y
	return this
};
Vector.prototype.mul = function(scalar) {
	return new Vector(this.x*scalar, this.y*scalar)
};

Vector.prototype.times = function(scalar) {
	this.x *= scalar
	this.y *= scalar
	return this
}

Vector.prototype.div = function(scalar) {
	this.x /= scalar;
	this.y /= scalar;
	return this;
};
Vector.prototype.magnitude = function() {
	return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
};

Vector.prototype.norm = function() {
	const magnitude = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
	this.x /= magnitude
	this.y /= magnitude
	return this;
}

Vector.prototype.setToSpeed = function(scalar){
	return this.norm().mul(scalar)
}


// Keep as new Vector or you will break things
Vector.prototype.directionTowards = function (vector) {
	return new Vector( vector.x - this.x, vector.y - this.y)
}

Vector.prototype.distanceTo = function(vector) {
	return Math.sqrt(Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2))
};

// Returns an angle between -Pi to Pi, from the horizontal axis
Vector.prototype.angle = function() {
	return Math.atan2(this.y, this.x);
};

Vector.prototype.floor = function() {
	return new Vector (Math.floor(this.x), Math.floor(this.y));
}

var zeroVector = new Vector (0, 0);