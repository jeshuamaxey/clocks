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
  var i = 0;
  var digit = new Digit(ctx, {x:0, y:0});
  digit.setNumeral(1);
  digit.draw();

  var interval = window.setInterval(function() {
    digit.setNumeral(++i%10);
    digit.draw(1000);
  }, 2000);
}