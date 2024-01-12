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
var number; // this variable holds the number under the red mark
var timer;  // timer for rotating to target
var target; // target number to rotate toward

/***************************************************************/
 
// This function is called when the web page is loaded and
// draws the combination lock
 
function initialize() {
  ctx = document.getElementById("canvas").getContext("2d");
  drawLock();
  drawNumbers();
  number = 0;
} // end initialize

/***************************************************************/

// This function contains three functions that draw the
// background of the lock without the logo and numbers

function drawLock() {
  ctx.save();
  ctx.resetTransform();
  drawBorder();
  drawTriangle();
  drawDial();
  ctx.restore();
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

// This function draws forty white marks and numbers,
// and also draws the logo

function drawNumbers() {
  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
  ctx.lineWidth = 4;
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.font = "bold 22px Helvetica, sans-serif";
    
  // iterate 40 times
  for (let i=0; i<40; i++) {
    
    // draw a long mark and a number
    // whenever the i is divisible by 5
    if (i % 5 == 0) {
      ctx.beginPath();
      ctx.moveTo(CENTER_X, CENTER_Y - 134);
      ctx.lineTo(CENTER_X, CENTER_Y - 118);
      ctx.stroke();
      ctx.fillText(i, CENTER_X, 105);
    } // end if
    
    // else draw a short mark
    else {
      ctx.beginPath();
      ctx.moveTo(CENTER_X, CENTER_Y - 134);
      ctx.lineTo(CENTER_X, CENTER_Y - 124);
      ctx.stroke();
    }
    
    // rotate after drawing each mark
    ctx.translate(CENTER_X, CENTER_Y);
    ctx.rotate((2 * Math.PI) / 40);
    ctx.translate(-CENTER_X, -CENTER_Y);
  }
  
  // draw the logo
  ctx.font = "bolder 22px serif";
  ctx.textBaseline = "middle";
  ctx.fillText("Dogo", CENTER_X, CENTER_Y);
} // end drawNumbers

/***************************************************************/

// This function turns the lock's dial one time

function turn(direction) {
  ctx.save();
  ctx.resetTransform();
  ctx.clearRect(0, 0, 500, 400);
  drawLock();
  ctx.restore();
  
  ctx.translate(CENTER_X, CENTER_Y);
  if (direction == "right") {
    ctx.rotate((2 * Math.PI) / 40);
    number = (number + 40 - 1) % 40;
  }
  else if (direction == "left") {
    ctx.rotate( -(2 * Math.PI) / 40);
    number = (number + 1) % 40;
  }
  ctx.translate(-CENTER_X, -CENTER_Y);
  drawNumbers();
  
  // when called from the toTarget function this code interrupts
  // the timer when the targeted number is achieved
  if (number == target) {
    clearInterval(timer);
  }
  console.log(number);
} // end turn

/***************************************************************/

// This function turns the lock's dial to target number

function toTarget(direction, form) {
  target = form.elements["numField"].value;
  timer = window.setInterval(turn, 150, direction);
} // end toTarget
