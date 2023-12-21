/*******************************************************************
* book_club.js
* John Dean
*
* This file implements a BookMeeting class, a list of
* BookMeeting objects, and a function which adds
* BookMeeting objects to the list.
*******************************************************************/

class BookMeeting {
  constructor (author, title, date) {
    this.author = author; // book author
    this.title = title;   // book title
    this.date = date;     // date of meeting to discuss book
  } // end constructor
  
  //****************************************************************
  
  // Return book meeting information as a table row
  
  bookMtgEntry() {
    return "<div class='row'>" +
      "<span>" + this.date.toDateString() + ":</span>" +
      "<span>" + this.author + ", <cite>" + this.title +
      "</cite></span></div>";
  } // end bookMtgEntry
} // end class BookMeeting
