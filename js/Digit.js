var Digit = function(ctx, pos, radius) {
  var NUMBER_OF_ROWS = 6;
  var NUMBER_OF_CLOCKS_PER_ROW = 4;

  this.ctx = ctx;
  this.pos = pos || {x: 0, y: 0};
  this.radius = radius || 40;
  this.numeral = 0;
  this.clockfaces = [];

  var clockfacePos;
  for(var i = 0; i < NUMBER_OF_ROWS; i++) {
   for(var j = 0; j < NUMBER_OF_CLOCKS_PER_ROW; j++) {
     clockfacePos = {
       x: this.pos.x + (j+0.5)*2*this.radius,
       y: this.pos.y + (i+0.5)*2*this.radius
     };
     this.clockfaces.push(new ClockFace(this.ctx, clockfacePos, this.radius));
   }
  }
}

Digit.prototype.draw = function(duration) {
  var drawMethod = duration ? 'animateToQueued' : 'draw';
  this.clockfaces.forEach(function(clockface) {
    clockface[drawMethod](duration);
  });
};

Digit.prototype._numeralSetter = function() {
  this.clockfaces.forEach(function(clockface, i) {
    clockface.queue(NUMERALS[this.numeral][i]);
  }.bind(this));
};

Digit.prototype.setNumeral = function(n) {
  if(n > 9 || n < 0 || n%1) {
    throw new Error('The numeral must be an integer from 0-9');
  } else {
    this.numeral = n;
    this._numeralSetter();
  }
};
