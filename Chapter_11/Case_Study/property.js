/******************************************************************
* property.js
* John Dean
*
* An object representing one real-estate property.
* It processes replace and delete operations for the selected
* property within the properies table.
******************************************************************/

class Property {
  constructor (row) {
    this.row = row;               // table's row element
    this.rowIndex = row.rowIndex; // last selected index
    for (let i=0; i<5; i++) {
      form.elements[i].value = row.childNodes[i].innerHTML;
    }
    property = this;
  } // end constructor
  
  //***************************************************************
  
  // Update arrays and displayed table
  
  replace() {
    for (let i=0; i<5; i++) {
      properties[this.rowIndex-1][i] = form.elements[i].value;
    }
    fillTable(); // resort and repopulate in case address changed
    cancel();
  } // end replace
  
  // Remove current property from properties array and from table
  
  deleteProperty() {
    table.deleteRow(this.rowIndex);
    properties.splice(this.rowIndex-1,1);
    cancel();
  } // end deleteProperty
} // end class Property

//*****************************************************************

// Global variables

var form;
var table;
var property = ""; // one real-estate property object

// This 2D array provides data for table

var properties = [
  // street number, street name, frontage, height, roof type
  [750, "New Hampshire", 100, 120, "mansard"],
  [811, "Massachusetts", 100, 120, "mansard"],
  [830, "New Hampshire", 100, 120, "mansard"],
  [735, "New Hampshire", 25, 32, "flat"],
  [733, "Massachusetts", 25, 32, "flat"],
  [815, "New Hampshire", 100, 120, "mansard"],
  [705, "New Hampshire", 100, 120, "mansard"],
  [843, "Massachusetts", 25, 32, "flat"],
  [725, "Massachusetts", 25, 32, "flat"],
  [821, "New Hampshire", 25, 32, "flat"],
  [701, "Massachusetts", 100, 120, "mansard"],
  [730, "Massachusetts", 100, 120, "mansard"],
  [835, "Massachusetts", 100, 120, "mansard"],
  [820, "Massachusetts", 25, 32, "flat"],
];

function initialize() {
  form = document.getElementsByTagName("form")[0];
  table = document.getElementById("descriptions");
  fillTable();
} // end initialize

// Sort properties array and re-populate table

function fillTable() {
  var rows; // collection of rows in the table

  rows = table.getElementsByTagName("tr");
  streetSort();
  for (let j=rows.length-1; j>0; j--) {
    table.deleteRow(j);
  }
  for (let i=0; i<properties.length; i++) {
    var row; // a new row for the table

    row = table.insertRow(rows.length);
    row.setAttribute("onclick", "new Property(this)");
    for (let j=0; j<properties[0].length; j++) {
      row.insertCell(j).innerHTML = properties[i][j];
    }
  }
} // end fillTable

function streetSort() {
  for (let i=0; i<properties.length; i++) {
    properties[i] = reverseAddress(properties[i]);
  }
  properties.sort();
  for (let i=0; i<properties.length; i++) {
    properties[i] = reverseAddress(properties[i]);
  }
} // end streetSort

function reverseAddress(oneProperty) {
  var temp = oneProperty[0];

  oneProperty[0] = oneProperty[1];
  oneProperty[1] = temp;
  return oneProperty;
} // end reverseAddress

//*****************************************************************

// Add another property and redisplay resorted table

function add() {
  properties.push(new Array(5));
  for (let i=0; i<5; i++) {
    properties[properties.length-1][i] =
      form.elements[i].value;
  }
  fillTable();
  cancel();
} // end add

// Clear input boxes and discard property object

function cancel() {
  for (let i=0; i<5; i++) {
    form.elements[i].value = "";
  }
  property = "";
} // end cancel
