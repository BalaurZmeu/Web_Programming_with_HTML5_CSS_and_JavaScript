/*****************************************************************
* solar_angles.js
* John Dean
*
* This file contains functions supporting solar_shadowing.html
*****************************************************************/

var image;                // image of one row of solar collectors
var form;                 // html input form
var spacing;              // pixel distance between array bases
var slope;                // radians up from horizontal to south
var canvas;               // active display
var context;              // nature of active display;
var length = 0.5 * 160;   // 80 px for 160 cm panel height
var XO = 50;              // left side of arrays
var YO;                   // bottom of north array
var dyP;                  // panel horizontal projection
var altitude;             // solar altitude angle above horizon
var azimuth;              // solar azimuth angle from south
var cosIncidenceAngle;    // angle between sun and normal to panel
var timer;                // timer controlling display dynamics

// This function is called when the Install Collectors button
// is clicked

function setup(form) {
  image = document.getElementById("pvArray");
  spacing = length * parseFloat(form.elements["spacing"].value);
  slope = form.elements["panelSlope"].value * Math.PI/180;
  canvas = document.getElementById("topView");
  context = canvas.getContext("2d");
  canvas.style.backgroundColor = "lightgray";
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "black";
  context.font = "1em Tahoma";
  context.fillText("(North)", 324, 20);
  if (slope < 0) {        // north-facing panels
    YO = 0.5 * (canvas.height - spacing - length);
    dyP = + length * Math.cos(slope); // south end higher
  }
  else {                  // south-facing panels
    YO = 0.5 * (canvas.height - spacing + length);
    dyP = - length * Math.cos(slope); // north end higher
  }
  drawOneArray(YO);
  drawOneArray(YO + spacing);
} // end setup

/****************************************************************/

// This function draws one array of panels

function drawOneArray(yO) {
  var scaleFac;   // horizontal projection of sloping surface
  var width;      // image width
  
  scaleFac = Math.cos(slope);
  width = image.width;
  // Scale vertically to represent top view of sloping panels
  context.scale(1.0, scaleFac);
  if (slope >= 0) {yO -= length * scaleFac;}
  context.drawImage(image, 50, yO / scaleFac);
  context.scale(1.0, 1.0 / scaleFac);
  // Apply white line to brighten sunlit higher end
  context.strokeStyle = "white";
  context.lineWidth = 3;
  context.beginPath();
  if (slope < 0) {yO += length * scaleFac;}
  context.moveTo(XO, yO);
  context.lineTo(XO + width, yO);
  context.stroke();
} // end drawOneArray

/****************************************************************/

// This function is called when the Show Behavior button is clicked

function showBehavior() {
  var degradation;                // shadowing effect
  var output;                     // electrical output
  var direct;                     // direct solar
  
  computeAngles();
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (altitude > 0) {             // if daytime
    canvas.style.backgroundColor = "lightgray";
    showOneShadow(XO, YO);            // from north panel
    showOneShadow(XO, YO + spacing);  // from south panel
    drawOneArray(YO);
    drawOneArray(YO + spacing);
    degradation = Math.pow(getObscuration(XO, YO), 0.38);
    degradation +=
      Math.pow(getObscuration(XO, YO + spacing), 0.38);
    form.elements["azimuth"].value = Math.round(azimuth *
      180 / Math.PI);
    form.elements["altitude"].value = Math.round(altitude *
      180 / Math.PI);
    direct = 0.86 * cosIncidenceAngle * (1.0 - 0.5 * degradation);
    // 1985 ASHRAE Fundamentals Guide, Chapter 27, Diffuse Solar:
    output = parseInt(100 * (direct + 0.14 * Math.sin(altitude)));
  } // end if daytime
  else {                        // nighttime
    canvas.style.backgroundColor = "midnightblue";
    form.elements.["azimuth"].value = "";
    form.elements.["altitude"].value = "";
    output = 0;
  } // end nighttime
  context.fillStyle = "black";
  context.font = "1em Tahoma";
  context.fillText("Electrical Output: " + output + " %", 10, 25);
  context.fillText("(North)", 324, 20);
} // end showBehavior
