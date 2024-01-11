/****************************************************************
* combination_lock.js
* Balaur Zmeu
*
* This file contains functions that are used by the
* combination_lock.html web page
****************************************************************/

// x and y coordinates for the face's center point.
const CENTER_X = 250;
const CENTER_Y = 200;
const RADIUS = 100;
const BORDER_WIDTH = 30;

var canvas; // the canvas element
var ctx;    // the canvas object's context

function initialize() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  
  // for the silver border:
  ctx.strokeStyle = "darkgray";
  ctx.fillStyle = "silver";
  ctx.lineWidth = 1;

  drawBorder();  
} // end initialize

function drawBorder() {
  ctx.beginPath();
  ctx.arc(CENTER_X, CENTER_Y,
    RADIUS, 0, 2.1 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(CENTER_X, CENTER_Y,
    RADIUS - BORDER_WIDTH, 0, 2.1 * Math.PI);
  ctx.stroke();
} // end drawBorder
