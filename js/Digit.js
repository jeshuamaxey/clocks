var Digit = function(ctx, pos, n) {
  var self = this;

  var NUMBER_OF_ROWS = 6;
  var NUMBER_OF_CLOCKS_PER_ROW = 4;
  var CLOCK_RADIUS = 40;

  this.ctx = ctx;
  this.pos = pos || {x: 0, y: 0};
  this.numeral = n || 0;
  this.clocks = [];

  var clockPos;
  for(var i = 0; i < NUMBER_OF_ROWS; i++) {
   for(var j = 0; j < NUMBER_OF_CLOCKS_PER_ROW; j++) {
     clockPos = {
       x: this.pos.x + (j+0.5)*2*CLOCK_RADIUS,
       y: this.pos.y + (i+0.5)*2*CLOCK_RADIUS
     };
     this.clocks.push(new ClockFace(this.ctx, clockPos, CLOCK_RADIUS)); 
   }
  }

  this.draw = function(directions) {
    this.clocks.forEach(function(clock) {
      clock.draw();
    });
  };
  
  this._numeralSetter = function() {
    this.clocks.forEach(function(clock, i) {
      clock.setHands(NUMERALS[self.numeral][i])
    })
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