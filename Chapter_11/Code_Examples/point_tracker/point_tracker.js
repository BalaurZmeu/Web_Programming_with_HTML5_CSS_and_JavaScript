/*******************************************************************
* point_tracker.js
* John Dean
*
* This file implements a Point class.
* It stores Point objects for the locations of the two
* most recent mouse clicks.
*******************************************************************/

class Point {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    if (Point.count == undefined || Point.count == 2) {
      Point.count = 1;
    }
    else if (Point.count == 1) {
      Point.count = 2;
    }
  } // end constructor

  //***************************************************************
  
  // Return the point in the format "(x, y)"
  
  value() {
    return "(" + this.x + ", " + this.y + ")";
  } // end value
  
  //***************************************************************
  
  // Return a count for the number of Point objects
  
  static getCount() {
    return (Point.count == undefined) ? 0 : Point.count;
  } // end getCount
  
  //***************************************************************
  
  // Return the distance between the two points or null if one
  // or more of the points is missing.
  
  static distance(pt1, pt2) {
    var xDist, yDist;  // distances apart in the 2 dimensions
    var distance;      // distance apart with direct connection
    
    if (Point.count == 2) {
      xDist = pt1.x - pt2.x;
      yDist = pt1.y - pt2.y;
      distance = Math.sqrt(xDist ** 2 + yDist ** 2);
    }
    else {
      distance = null;
    }
    
    return distance;
  } // end distance
} // end class Point
