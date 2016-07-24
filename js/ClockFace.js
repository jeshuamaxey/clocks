function ClockFace(ctx, pos, radius, initialDirections, initialTime) {
  var self = this;

  this.NUMBER_OF_HANDS = 2;

  this.ctx = ctx;
  this.pos = pos;
  this.radius = radius;
  this.edgeRadius = this.radius*0.9;
  this.directions = initialDirections || [1,1,0,0];
  this.queuedDirections = this.directions;

  this.hands = {};
  this.hands.hourLength = this.radius*0.65;
  this.hands.minuteLength = this.radius*0.8;

  if(initialTime) {
    this.hands.hour = initialTime[0]%12;
    this.hands.minute = initialTime[1]%60;

    this.hands.hourQueued = initialTime[0]%12;
    this.hands.minuteQueued = initialTime[1]%60;
  }
  
  this._clear = function() {
    ctx.clearRect(this.pos.x - this.radius,
                  this.pos.y - this.radius,
                  this.radius*2,
                  this.radius*2);
  };
  
  this._drawEdge = function() {
    ctx.arc(this.pos.x, this.pos.y, this.edgeRadius, 0, Math.PI*2,true);
  }
  
  this._drawHands = function(progress) {
    progress = progress || 1;
    var theta = {h: 0, m:0};
    var dh = self.hands.hourQueued - self.hands.hour;
    var dm = self.hands.minuteQueued - self.hands.minute;

    theta.h = (self.hands.hour + dh*progress)*Math.PI/6;
    theta.m = (self.hands.minute + dm*progress)*Math.PI/30;

    ctx.moveTo(this.pos.x, this.pos.y);
    ctx.lineTo(
      this.pos.x + this.hands.hourLength*Math.sin(theta.h),
      this.pos.y - this.hands.hourLength*Math.cos(theta.h)
    );

    ctx.moveTo(this.pos.x, this.pos.y);
    ctx.lineTo(
      this.pos.x + this.hands.minuteLength*Math.sin(theta.m),
      this.pos.y - this.hands.minuteLength*Math.cos(theta.m)
    );
  };
  
  this.draw = function(progress) {
    this._clear();
    ctx.beginPath();
    this._drawEdge();
    this._drawHands(progress);
    ctx.stroke();
  }
  
  this.setHands = function(directions) {
    var invalidDirections = directions.length != 4;
    if(invalidDirections) {
      throw new Error('directions must be an array of length four');
      return;
    } else {
      this.directions = directions;
    }
  }

  this.queue = function(time) {
    self.hands.hourQueued = time[0]%12;
    self.hands.minuteQueued = time[1]%60;
  };

  this.animateToQueued = function(duration) {
    duration = duration || 1000;
    var start = 0;
    var progress;

    function step(timestamp) {
      if (!start) start = timestamp;
      var elapsed = timestamp - start;
      progress = elapsed/duration;

      if(elapsed > duration) {
        self.hands.hour = self.hands.hourQueued;
        self.hands.minute = self.hands.minuteQueued;
      } else {
        self.draw(progress);
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  };
}