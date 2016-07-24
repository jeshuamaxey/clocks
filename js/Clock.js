'use strict';

function Clock(ctx, w, h, startTime) {
  var self = this;

  self.startMs = startTime.getTime();
  self.ticksElapsed = 0;
  self.digits = [
    new Digit(ctx, {x: 0, y: 0}),
    new Digit(ctx, {x: w/2, y: 0}),
    new Digit(ctx, {x: 0, y: h/2}),
    new Digit(ctx, {x: w/2, y: h/2})
  ];

  self._draw = function() {
    self.digits.forEach(function(digit) {
      digit.draw();
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
    
    self._draw();
  };

  self._interval = window.setInterval(function() {
    self.ticksElapsed++;
    self.tick(self.startMs + 1000*self.ticksElapsed);
  }, 1000);
}