/****************************************************************
* combination_lock.js
* Balaur Zmeu
*
* This file contains functions that are used by the
* combination_lock.html web page
****************************************************************/

// x and y coordinates for the combination lock's center point

const CENTER_X = 250;
const CENTER_Y = 200;

const RADIUS = 180;

var ctx;    // canvas object's context

/***************************************************************/
 
// This function is called when the web page is loaded and
// draws the combination lock
 
function initialize() {
  ctx = document.getElementById("canvas").getContext("2d");
  drawLock();
} // end initialize

/***************************************************************/

// This function contains three functions that draw the
// background of the lock without the logo and numbers

function drawLock() {
  drawBorder();
  drawTriangle();
  drawDial();
} // end drawLock

/***************************************************************/

// This is a helper function that draws the gray border
// it is called by the drawLock() function

function drawBorder() {
  ctx.strokeStyle = "dimgray";
  ctx.lineWidth = 2;
  ctx.fillStyle = "silver";
  ctx.beginPath();
  ctx.arc(CENTER_X, CENTER_Y,
    RADIUS, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(CENTER_X, CENTER_Y,
    RADIUS / 1.25, 0, 2 * Math.PI); 
  ctx.stroke();
} // end drawBorder

/***************************************************************/

// This is a helper function that draws the red triangle
// it is called by the drawLock() function

function drawTriangle() {
  ctx.strokeStyle = "silver";
  ctx.lineWidth = 3;
  ctx.fillStyle = "rgb(240, 30, 40)";
  ctx.beginPath();
  ctx.moveTo(CENTER_X - 20, 42);
  ctx.lineTo(CENTER_X + 20, 42);
  ctx.lineTo(CENTER_X, 60);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
} // end drawTriangle

/***************************************************************/

// This is a helper function that draws the dial's background
// it is called by the drawLock() function

function drawDial() {
  // the black region
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(CENTER_X, CENTER_Y,
    RADIUS / 1.3, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  
  // the dark green region
  ctx.fillStyle = "darkslategray";
  ctx.beginPath();
  ctx.arc(CENTER_X, CENTER_Y,
    RADIUS / 3.5, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
} // end drawDial

/***************************************************************/

// This function draws the numbers and the logo

function drawNumbers() {
  for (let i=0; i<40; i++) {
  
  }
} // end drawNumbers

