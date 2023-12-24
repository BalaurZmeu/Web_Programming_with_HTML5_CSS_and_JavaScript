/******************************************************************
* statistics.js
* Balaur Zmeu
*
* This file contains the definition of the NumberList class and
* its methods. This file supports the statistics.html web page.
******************************************************************/

class NumberList {
  constructor (numbers) {
    this.numbers = numbers.value.split(" ");
  } // end constructor
  
  //***************************************************************
  
  // This method returns the mean
  
  calcMean() {
    return "test-mean";
  } // end calcMean
  
  //***************************************************************
  
  // This method returns the variance
  
  calcVar() {
    return "test-var";
  } // end calcVar
  
  //***************************************************************
  
  // This method returns the standard deviation
  
  calcDev() {
    return "test-dev";
  } // end calcDev
  
} // end class NumberList

//*****************************************************************

// Global variables

var userInput; // the string from the input text control

var numbers; // the object representing an array of numbers

// Regular expression to check if the user input is
// a space separated list of numbers

var regex = /^(\s*-?\d+(\.\d+)?\s+)+\s*-?\d+(\.\d+)?\s*$/;

//*****************************************************************

// This function checks if the user input is valid, then
// creates a NumberList object and calls the object's method
// that corresponds to the prompt argument

function check(prompt) {
  userInput = document.getElementById("number-control");
  
  if (!userInput.checkValidity() || !regex.test(userInput.value)) {
    document.getElementById("error").style.display = "block";
  }
  else {
    document.getElementById("error").style.display = "none";
    numbers = new NumberList(userInput);
    
    switch (prompt) {
      case "mean":
        document.getElementById("mean").
          innerHTML = numbers.calcMean();
        break;
      case "var":
        document.getElementById("var").
          innerHTML = numbers.calcVar();
        break;
      case "dev":
        document.getElementById("dev").
          innerHTML = numbers.calcDev();
    } // end switch
  } // end else
} // end check
