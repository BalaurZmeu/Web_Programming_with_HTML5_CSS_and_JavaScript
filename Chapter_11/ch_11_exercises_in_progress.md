# Chapter 11 Exercises

### 1. Describe the two ways that the `this` keyword can be used.

The `this` keyword can mean different things depending on its context. It can be used for event handlers in order to refer to the enclosing element. Here’s a rollover example that uses `this` within an `onmouseover` event handler:

```html
<img src="imageOne.jpg" onmouseover="this.src = 'imageTwo.jpg';">
```

On the other hand, when you’re inside a constructor or inside a method, the `this` ­keyword accesses the object that’s associated with the constructor or method. So `this.name` accesses the instantiated object’s `name` property.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  } // end constructor
} // end class Person
```

### 2. Suppose you have a `Human` class with a class property named `avgAge`.

#### a) Why is it appropriate to have `avgAge` be a class property instead of a regular property?

#### b) Assume that the `avgAge` property gets assigned a value only after a `Human` object gets instantiated. Provide an `if` statement for the `Human` constructor that takes care of the `avgAge` property for the first instantiated `Human` object. Specifically, check for `avgAge` not having a value and if that’s the case, assign the `age` parameter’s value to the `avgAge` property.


a) It is appropriate to have `avgAge` as a class property because it allows for a single shared value across all instances of the class, avoiding unnecessary duplication of the property in each object.

b)
```javascript
class Human {
  static avgAge;
  static count;

  constructor(age) {
    if (Human.avgAge === undefined) {
      Human.avgAge = age;
    } else {
      Human.avgAge = (Human.avgAge * Human.count + age) /
        (Human.count + 1);
    }
    Human.count++;
  }
}
```

### 3. Improve the Point Tracker web page presented earlier by displaying a colored point whenever the user clicks the mouse. Use absolute positioning to display each point at the position at which it’s clicked. So if the user clicks at position `x = 220` and `y = 331`, then you should display a point at that location on the browser window. To implement a point, display a space character with a circular border and a colored background. Add a color property to the `Point` class. Each new point should use a different background color than its predecessor. Cycle from red, to green, to blue, and then start over with red.



### 4.Improve the previous exercise’s web page by enabling the user to drag the points. While dragging a point, update the point’s coordinates label. Clicking on the point should not activate the click listener (in other words, it should not create a new point).



### 5. Suppose you have an `iAgree` variable that holds a checkbox control object. Provide an `addEventListener` method call that adds an `onchange` event handler to the checkbox. The event handler should call a function named `agree`.

```javascript
iAgree = document.getElementById("checkboxControl");
iAgree.addEventListener("change", agree);
```

### 6. Refer back to Figure 11.10, which shows a class diagram for `Employee`, `PartTime`, and `FullTime` classes. Provide the class definition for the `PartTime` class. To help you out, here’s the definition for the `Employee` class:

```javascript
class Employee {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  } // end constructor
} // end class Employee
```

```javascript
class PartTime extends Employee {
  constructor(name, id, hourlyWage) {
    super(name, id);
    this.hourlyWage = hourlyWage;
    this.hoursWorked = 0;
  } // end constructor
  
  addHours(hours) {
    this.hoursWorked += hours;
  }
  
  calculateWage() {
    return `${this.name}: ${this.hoursWorked *
      this.hourlyWage}`;
  }
} // end class PartTime
```

### 7. Assume the following code is part of a working web page. What message will `console.log` display?

```javascript
var i = 0;
var msg = "";
for (; i<3; i++) {
  switch (i + i) {
    case 0:
      msg += "uno ";
      break;
    case 1: case 2:
      msg += "dos ";
    case 3:
      msg += "tres ";
    default:
      msg += "cuatro ";
  } // end switch
} // end for
console.log("msg = " + msg);
```

The `console.log` will display the message "msg = uno dos tres cuatro cuatro ".

### 8. Declare an empty deck array. Use a loop to fill the array with string values that represent the 52 cards of a normal deck. The numbers go from 1 to 13 with 1 for an ace, 11 for a jack, 12 for a queen, and 13 for a king. The suits are C for clubs, D for diamonds, H for hearts, and S for spades. Here’s the list of 52 values:

#### 1C, …, 13C, 1D, …, 13D, 1H, …, 13H, 1S, …, 13S

#### To test your answer, you can stick your code in a script container with this line at the bottom:

```javascript
console.log("deck = " + deck);
```

```javascript
var deck = new Array();
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const cards = ["Ace", "2", "3", "4", "5", "6", "7", "8",
  "9", "10", "Jack", "Queen", "King"];

for (let suit of suits) {
  for (let card of cards) {
    deck.push(card + " of " + suit);
  }
}

console.log("deck = " + deck);
```

### 9. The following code implements a simple web page that creates a list of cheerleader names and sorts the names. Provide an improved version of the web page that stores each cheerleader’s height in centimeters and sorts the cheerleaders by height. Among other things, you’ll need to implement a Cheerleader class with name and height properties.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="author" content="John Dean">
<title>Stunt Group</title>
<script>
  var stuntGroup = new Array();
  
  function addCheerleader() {
    stuntGroup.push(document.getElementById("cheerleader").value);
    stuntGroup.sort();
  } // end addCheerleader
  
  function displayStuntGroup() {
    var namesColumn = "";
    for (let i=0; i<stuntGroup.length; i++) {
      namesColumn += stuntGroup[i] + "<br>";
    }
    document.getElementById("stunt-group").innerHTML = namesColumn;
  } // end displayStuntGroup
</script>
</head>
<body>
  <input type="text" id="cheerleader">
  <br>
  <input type="button" value="Add cheerleader"
    onclick="addCheerleader();">
  <br><br>
  <input type="button" value="Display stunt group"
    onclick="displayStuntGroup();">
  <div id="stunt-group"></div>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="author" content="John Dean">
<title>Stunt Group</title>
<script>
  class Cheerleader {
    constructor(name, height) {
      this.name = name;
      this.height = height;
    } // end constructor
  } // end class Cheerleader

  var stuntGroup = new Array();
  
  function addCheerleader() {
    stuntGroup.push(document.getElementById("cheerleader").value);
    stuntGroup.sort();
  } // end addCheerleader
  
  function displayStuntGroup() {
    var namesColumn = "";
    for (let i=0; i<stuntGroup.length; i++) {
      namesColumn += stuntGroup[i] + "<br>";
    }
    document.getElementById("stunt-group").innerHTML = namesColumn;
  } // end displayStuntGroup
</script>
</head>
<body>
  <input type="text" id="cheerleader">
  <br>
  <input type="button" value="Add cheerleader"
    onclick="addCheerleader();">
  <br><br>
  <input type="button" value="Display stunt group"
    onclick="displayStuntGroup();">
  <div id="stunt-group"></div>
</body>
</html>
```

### 10. Describe what happens to the `bookMtgList` array if the following code executes. In your answer, you must mention the 0 return value.

```javascript
bookMtgList.sort(function (a, b) {return 0;});
```



### 11. Improve the Book Club web page presented earlier by adding a delete button for each book meeting. When the user clicks a book meeting’s delete button, the book meeting should be removed from the `bookMtgList` array, and it should disappear from the displayed schedule.



> Written with [StackEdit](https://stackedit.io/).
