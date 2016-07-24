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
  var clock = new Clock(ctx, canvas.width, canvas.height, new Date());
}