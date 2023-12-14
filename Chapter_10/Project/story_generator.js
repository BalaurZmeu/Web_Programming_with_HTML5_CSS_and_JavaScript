/*******************************************************************
* story_generator.js
* Balaur Zmeu
*
* This file contains functions that support the story_generator.html
*******************************************************************/
// Global variables accessible for all functions

var inputForm;  // User entered words
var resultPage; // Part of the page with text of the story
var inputPage;  // Part of the page with the input form

/******************************************************************/
// This function replaces the missing text with the words from
// the user input form, hides the form, and shows the result

function generateText(form) {
  inputForm = document.getElementById("input-form");
  resultPage = document.getElementById("result-page");
  inputPage = document.getElementById("input-page");
  
  for (let i=0; i<5; i++) {
    resultPage.children[i].innerHTML =
      inputForm.children[i].children[1].value;    
  }
  
  resultPage.style.display = "block";
  inputPage.style.display = "none";
} // end generateText

/******************************************************************/
// This function clears the user input form

function resetForm() {
  for (let i=0; i<5; i++) {
    inputForm.children[i].children[1].value = "";
  }
}

/******************************************************************/
// This function hides the result section with the story and
// shows the user input form

function goBack() {
  inputPage.style.display = "block";
  resultPage.style.display = "none";
}
