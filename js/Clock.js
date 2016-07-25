'use strict';

function Clock(ctx, w, h, startTime, options) {
  this.startMs = startTime.getTime();
  this.ticksElapsed = 0;
  this.options = options;

  var dy = this.options.seconds ? h/3 : h/2;

  this.digits = [
    new Digit(ctx, {x: 0, y: 0}, 20),
    new Digit(ctx, {x: w/2, y: 0}, 20),
    new Digit(ctx, {x: 0, y: dy}, 20),
    new Digit(ctx, {x: w/2, y: dy}, 20)
  ];

  if(this.options.seconds) {
    this.digits.push(new Digit(ctx, {x: 0, y: 2*dy}, 20));
    this.digits.push(new Digit(ctx, {x: w/2, y: 2*dy}, 20));
  }
}

Clock.prototype._draw = function() {
  this.digits.forEach(function(digit) {
    digit.draw(750);
  });
};

Clock.prototype.tick = function(t) {
  var time = new Date(t);
  var hours = time.getHours() > 9 ? '' + time.getHours() : '0' + time.getHours();
  var mins = time.getMinutes() > 9 ? '' + time.getMinutes() : '0' + time.getMinutes();

  this.digits[0].setNumeral(hours[0]);
  this.digits[1].setNumeral(hours[1]);
  this.digits[2].setNumeral(mins[0]);
  this.digits[3].setNumeral(mins[1]);

  if(this.options.seconds) {
    var secs = time.getSeconds() > 9 ? '' + time.getSeconds() : '0' + time.getSeconds();
    this.digits[4].setNumeral(secs[0]);
    this.digits[5].setNumeral(secs[1]);
  }

  this._draw();
};

Clock.prototype.start = function() {
  this._interval = window.setInterval(function() {
    this.ticksElapsed++;
    this.tick(this.startMs + 1000*this.ticksElapsed);
  }.bind(this), 1000);
};
