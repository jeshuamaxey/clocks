var Digit = function(ctx, pos, radius) {
  var self = this;

  var NUMBER_OF_ROWS = 6;
  var NUMBER_OF_CLOCKS_PER_ROW = 4;

  this.ctx = ctx;
  this.pos = pos || {x: 0, y: 0};
  self.radius = radius || 40;
  this.numeral = 0;
  this.clockfaces = [];

  var clockfacePos;
  for(var i = 0; i < NUMBER_OF_ROWS; i++) {
   for(var j = 0; j < NUMBER_OF_CLOCKS_PER_ROW; j++) {
     clockfacePos = {
       x: this.pos.x + (j+0.5)*2*self.radius,
       y: this.pos.y + (i+0.5)*2*self.radius
     };
     this.clockfaces.push(new ClockFace(this.ctx, clockfacePos, self.radius));
   }
  }

  this.draw = function(duration) {
    var drawMethod = duration ? 'animateToQueued' : 'draw';
    this.clockfaces.forEach(function(clockface) {
      clockface[drawMethod](duration);
    });
  };
  
  this._numeralSetter = function() {
    this.clockfaces.forEach(function(clockface, i) {
      // clockface.setHands(NUMERALS[self.numeral][i]);
      clockface.queue(NUMERALS[self.numeral][i]);
    });
  }
  
  this.setNumeral = function(n) {
    if(n > 9 || n < 0 || n%1) {
      throw new Error('The numeral must be an integer from 0-9');
    } else {
      self.numeral = n;
      this._numeralSetter.call(self);
    } 
  };
}