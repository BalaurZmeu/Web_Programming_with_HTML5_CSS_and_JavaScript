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
} // end setup
