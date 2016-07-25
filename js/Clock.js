'use strict';

function Clock(ctx, w, h, startTime, options) {
  var VERTICAL = 'vertical';
  var HORIZONTAL = 'horizontal';

  this.startMs = startTime.getTime();
  this.ticksElapsed = 0;

  var defaults = {
    seconds: false,
    animationDuration: 750,
    arrangement: VERTICAL,
    radius: 20
  };

  this.options = _.merge(defaults, options);

  var dy = this.options.seconds ? h/3 : h/2;
  var dx = w/6;

  if(this.options.arrangement === VERTICAL) {
    this.digits = [
      new Digit(ctx, {x: 0, y: 0}, this.options.radius),
      new Digit(ctx, {x: w/2, y: 0}, this.options.radius),
      new Digit(ctx, {x: 0, y: dy}, this.options.radius),
      new Digit(ctx, {x: w/2, y: dy}, this.options.radius)
    ];

    if(this.options.seconds) {
      this.digits.push(new Digit(ctx, {x: 0, y: 2*dy}, this.options.radius));
      this.digits.push(new Digit(ctx, {x: w/2, y: 2*dy}, this.options.radius));
    }
  } else if(HORIZONTAL) {
    this.digits = [
      new Digit(ctx, {x: 0, y: 0}, this.options.radius),
      new Digit(ctx, {x: dx, y: 0}, this.options.radius),
      new Digit(ctx, {
        x: 2*dx,
        y: 0
      }, this.options.radius),
      new Digit(ctx, {
        x: 3*dx,
        y: 0
      }, this.options.radius)
    ];

    if(this.options.seconds) {
      this.digits.push(new Digit(ctx, {
        x: 4*dx,
        y: 0
      }, this.options.radius));
      this.digits.push(new Digit(ctx, {
        x: 5*dx,
        y: 0
      }, this.options.radius));
    }
  } else {
    throw new Error('arrangement must be set to either \'horizontal\' or \'vertical\'.');
  }
}

Clock.prototype._draw = function() {
  this.digits.forEach(function(digit) {
    digit.draw(this.options.animationDuration);
  }.bind(this));
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
