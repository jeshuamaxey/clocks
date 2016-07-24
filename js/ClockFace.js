function ClockFace(ctx, pos, radius, initialDirections) {
  this.NUMBER_OF_HANDS = 2;

  this.ctx = ctx;
  this.pos = pos;
  this.radius = radius;
  this.edgeRadius = this.radius*0.9;
  this.handLength = this.radius*0.8;
  this.directions = initialDirections || [1,1,0,0];
  
  this._clear = function() {
    ctx.clearRect(this.pos.x - this.radius,
                  this.pos.y - this.radius,
                  this.radius*2,
                  this.radius*2);
  };
  
  this._drawEdge = function() {
    ctx.arc(this.pos.x, this.pos.y, this.edgeRadius, 0, Math.PI*2,true);
  }
  
  this._drawHands = function() {
    if(_.sum(this.directions)) {
      for(var i = 0; i < this.directions.length; i++) {
        if(this.directions[i]) {
          ctx.moveTo(this.pos.x, this.pos.y);
          ctx.lineTo(this.pos.x + this.handLength*Math.sin(i*Math.PI/2),
                     this.pos.y - this.handLength*Math.cos(i*Math.PI/2));
        }
      }
    } else {
      ctx.moveTo(this.pos.x, this.pos.y);
      ctx.lineTo(this.pos.x + this.handLength*Math.sin(2.5*Math.PI/2),
                 this.pos.y - this.handLength*Math.cos(2.5*Math.PI/2));
    }
  };
  
  this.draw = function() {
    this._clear();
    ctx.beginPath();
    this._drawEdge();
    this._drawHands();
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
}