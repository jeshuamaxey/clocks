'use strict';

function Clock(ctx, w, h, startTime, options) {
  var self = this;

  self.startMs = startTime.getTime();
  self.ticksElapsed = 0;
  self.options = options;

  var dy = self.options.seconds ? h/3 : h/2;

  self.digits = [
    new Digit(ctx, {x: 0, y: 0}, 20),
    new Digit(ctx, {x: w/2, y: 0}, 20),
    new Digit(ctx, {x: 0, y: dy}, 20),
    new Digit(ctx, {x: w/2, y: dy}, 20)
  ];

  if(self.options.seconds) {
    self.digits.push(new Digit(ctx, {x: 0, y: 2*dy}, 20));
    self.digits.push(new Digit(ctx, {x: w/2, y: 2*dy}, 20));
  }

  self._draw = function() {
    self.digits.forEach(function(digit) {
      digit.draw(750);
    });
  }

  self.tick = function(t) {
    var time = new Date(t);
    var hours = time.getHours() > 9 ? '' + time.getHours() : '0' + time.getHours();
    var mins = time.getMinutes() > 9 ? '' + time.getMinutes() : '0' + time.getMinutes();

    self.digits[0].setNumeral(hours[0]);
    self.digits[1].setNumeral(hours[1]);
    self.digits[2].setNumeral(mins[0]);
    self.digits[3].setNumeral(mins[1]);

    if(self.options.seconds) {
      var secs = time.getSeconds() > 9 ? '' + time.getSeconds() : '0' + time.getSeconds();
      self.digits[4].setNumeral(secs[0]);
      self.digits[5].setNumeral(secs[1]);
    }
    
    self._draw();
  };

  self._interval = window.setInterval(function() {
    self.ticksElapsed++;
    self.tick(self.startMs + 1000*self.ticksElapsed);
  }, 1000);
}