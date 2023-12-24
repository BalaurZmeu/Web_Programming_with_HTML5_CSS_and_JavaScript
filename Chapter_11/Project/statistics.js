/******************************************************************
* statistics.js
* Balaur Zmeu
*
* This file contains the definition of the NumberList class and
* its methods. This file supports the statistics.html web page.
******************************************************************/

class NumberList {
  constructor (numbers) {
    const numberStrings = numbers.value.split(/\s+/);
    this.numbers = numberStrings.map(str => parseInt(str, 10));
  } // end constructor
  
  //***************************************************************
  
  // This method returns the mean
  
  calculateMean() {
    const sum = this.numbers.reduce((accumulator, currentValue) =>
      accumulator + currentValue, 0);
    const mean = sum / this.numbers.length;
    return mean.toFixed(3);
  } // end calculateMean
  
  //***************************************************************
  
  // This method returns the variance
  
  calculateVariance() {
    const mean = this.calculateMean();
    const squaredDifferences = this.numbers.map(number =>
      Math.pow(number - mean, 2));
    const sumSquaredDiff = squaredDifferences.
      reduce((acc, val) => acc + val, 0);
    const variance = sumSquaredDiff / this.numbers.length;
    return variance.toFixed(3);
  } // end calculateVariance
  
  //***************************************************************
  
  // This method returns the standard deviation
  
  calculateStandardDeviation() {
    const variance = this.calculateVariance();
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation.toFixed(3);
  } // end calculateStandardDeviation
  
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
          innerHTML = numbers.calculateMean();
        break;
      case "var":
        document.getElementById("var").
          innerHTML = numbers.calculateVariance();
        break;
      case "dev":
        document.getElementById("dev").
          innerHTML = numbers.calculateStandardDeviation();
    } // end switch
  } // end else
} // end check
