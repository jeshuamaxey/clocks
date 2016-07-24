'use strict';

$(document).ready(go);

function go() {
  // setup canvas
  var canvas = document.getElementById('clockCanvas');
  if (!canvas.getContext) {
    throw new Error('bad browser');
    return;
  }
  var ctx = canvas.getContext('2d');
  var pos = {
    x: canvas.width/2,
    y: canvas.height/2
  };
  var rad = 100;
  var clockFace = new ClockFace(ctx, pos, rad, null, [12, 15]);
  clockFace.draw();
  window.setTimeout(function() {
    clockFace.queue([6, 45]);
    clockFace.animateToQueued(1000);
  }, 1000);
}