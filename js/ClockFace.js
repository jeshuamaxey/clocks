function ClockFace(ctx, pos, radius, initialDirections, initialTime) {
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
}

ClockFace.prototype._clear = function() {
  this.ctx.clearRect(
    this.pos.x - this.radius,
    this.pos.y - this.radius,
    this.radius*2,
    this.radius*2
  );
};

ClockFace.prototype._drawEdge = function() {
  this.ctx.arc(this.pos.x, this.pos.y, this.edgeRadius, 0, Math.PI*2,true);
};

ClockFace.prototype._drawHands = function(progress) {
  progress = progress || 1;
  var theta = {h: 0, m:0};
  var dh = this.hands.hourQueued - this.hands.hour;
  var dm = this.hands.minuteQueued - this.hands.minute;

  theta.h = (this.hands.hour + dh*progress)*Math.PI/6;
  theta.m = (this.hands.minute + dm*progress)*Math.PI/30;

  this.ctx.moveTo(this.pos.x, this.pos.y);
  this.ctx.lineTo(
    this.pos.x + this.hands.hourLength*Math.sin(theta.h),
    this.pos.y - this.hands.hourLength*Math.cos(theta.h)
  );

  this.ctx.moveTo(this.pos.x, this.pos.y);
  this.ctx.lineTo(
    this.pos.x + this.hands.minuteLength*Math.sin(theta.m),
    this.pos.y - this.hands.minuteLength*Math.cos(theta.m)
  );
};

ClockFace.prototype.draw = function(progress) {
  this._clear();
  this.ctx.beginPath();
  this._drawEdge();
  this._drawHands(progress);
  this.ctx.stroke();
};

ClockFace.prototype.setHands = function(directions) {
  var invalidDirections = directions.length != 4;
  if(invalidDirections) {
    throw new Error('directions must be an array of length four');
    return;
  } else {
    this.directions = directions;
  }
};

ClockFace.prototype.queue = function(time) {
  this.hands.hourQueued = time[0]%12;
  this.hands.minuteQueued = time[1]%60;
};

ClockFace.prototype.animateToQueued = function(duration) {
  var self = this;
  duration = duration || 1000;
  var start = 0;
  var progress;

  function drawFrame(timestamp) {
    if (!start) start = timestamp;
    var elapsed = timestamp - start;
    progress = elapsed/duration;

    if(elapsed > duration) {
      self.hands.hour = self.hands.hourQueued;
      self.hands.minute = self.hands.minuteQueued;
    } else {
      self.draw(progress);
      requestAnimationFrame(drawFrame);
    }
  }

  requestAnimationFrame(drawFrame);
};
