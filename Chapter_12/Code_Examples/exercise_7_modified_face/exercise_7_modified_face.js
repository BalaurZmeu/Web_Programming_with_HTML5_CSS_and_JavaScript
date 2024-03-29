/******************************************************************
* face.js
* John Dean
*
* This file handles drawing a face.
******************************************************************/

// This function draws the initial face.

function initialize() {
  // x and y coordinates for the face's center point
  const CENTER_X = 250;
  const CENTER_Y = 250;
  const RADIUS = 150;
  const TITLE_BASELINE = 75;
  const EYE_WIDTH = 8;
  const EYE_HEIGHT = 6;
  
  var ctx; // the canvas object's context
  
  ctx = document.getElementById("canvas").getContext("2d");
  ctx.fillStyle = "blue";
  ctx.textAlign = "center";
  ctx.font = "75px Arial, sans-serif";
  ctx.fillText("Hello", CENTER_X, TITLE_BASELINE);
  
  ctx.strokeStyle = "orange";
  ctx.fillStyle = "yellow";
  ctx.lineWidth = 4;
  
  // draw circle
  ctx.beginPath();
  ctx.arc(CENTER_X, CENTER_Y, RADIUS, 0, 2 * Math.PI);
  ctx.fill();
  // draw eyes
  ctx.moveTo(CENTER_X - RADIUS / 3, CENTER_Y - RADIUS / 3);
  ctx.rect(CENTER_X - RADIUS / 3, CENTER_Y - RADIUS / 3,
    EYE_WIDTH, EYE_HEIGHT);
  ctx.moveTo(CENTER_X + RADIUS / 3, CENTER_Y - RADIUS / 3);
  ctx.rect(CENTER_X + RADIUS / 3, CENTER_Y - RADIUS / 3,
    EYE_WIDTH, EYE_HEIGHT);
  // draw mouth
  ctx.moveTo(CENTER_X - RADIUS / 3, CENTER_Y + RADIUS / 3);
  ctx.lineTo(CENTER_X + RADIUS / 3, CENTER_Y + RADIUS / 3);
  ctx.stroke();
} // end initialize
