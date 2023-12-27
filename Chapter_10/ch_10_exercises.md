# Chapter 10 Exercises

### 1. Assume the following code is part of a working web page. What message will the `alert` dialog display?

```javascript
var msg = "Usie:";
var x = 3;
while (x > 0) {
  msg += " " + x
  x--;
}
alert(msg);
```

The alert dialog will display the message: "Usie: 3 2 1".

### 2. Assume the following code is part of a working web page. The following code is supposed to display the sum of 1 through 4 (with a dialog that says “Sum = 10”) and the product of 1 through 4 (with a dialog that says “Product = 24”). Find the errors and fix them.

```javascript
var count = 1;
var sum = 0;
var product = 0;
while (count < 4) {
  sum += count;
  product *= count;
  if (count == 4)
    alert("Sum = " + sum);
    alert("Product = " + product);
  count++;
}
```

Here's the fixed code:

```javascript
var count = 1;
var sum = 0;
var product = 1;       // initialized product to 1 instead of 0
while (count <= 4) {   // changed the condition to <=
  sum += count;
  product *= count;
  count++;             // deleted the if condition
}
alert("Sum = " + sum); // took the alert out of the while loop
alert("Product = " + product);
```

The issue here is that we've initialized `product` to `0`, and then we're multiplying it by `count` in each iteration of the loop. When any number is multiplied by `0`, the result is always `0`. To fix this, we should initialize `product` to `1` instead of `0`.

### 3. Assume the following code is part of a working web page. What message will `console.log` display?

```javascript
var userTurn = true;
var userTurns = computerPoints = 0;
do {
if (userTurn) {
userTurns++;
}
else {
computerPoints++;
}
userTurn = !userTurn;
} while (userTurns < 2);
console.log("computer points: " + computerPoints);
```

After three iterations through the `do...while` loop, the message displayed in the console will be:

```
computer points: 1
```

### 4. Suppose you have a variable named `quantity` that holds a number. Provide an `if` statement heading that checks to see whether quantity holds a whole number.

Whole numbers are positive numbers, including zero, without any decimal or fractional parts. Here's the `if` statement heading that checks these conditions:

```javascript
if (Number.isInteger(quantity) && quantity >= 0) {
  statement;
}
```

### 5. Given the following web page code that generates the factorial for a user-entered number. Provide a standard `for` loop that could be used to replace the `while` loop.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="author" content="John Dean">
<title>Factorial Generator</title>
<script>
  // This function generates a factorial.
  function generateFactorial(form) {
  var num;   // a user-entered number
  var factorial; // factorial of num
  var count;  // multiplicand for factorial calculation
  num = form.elements["number"].valueAsNumber;
  factorial = 1;
  count = 2;
  
  while (count <= num) {
    factorial *= count;
    count++;
  }
  form.elements["result"].value = num + "! = " + factorial;
  } // end generateFactorial
</script>
</head>
<body>
<form>
  <label for="number">Enter a whole number:</label>
  <input type="number" id="number"
    min="0" max="15" step="1" required>
  <br><br>
  <input type="button" value="Generate Factorial"
    onclick="generateFactorial(this.form);">
  <br><br>
  <output id="result"></output>
</form>
</body>
</html>
```

Here's the modified `<script>` element with the `while` loop replaced with a `for` loop:

```html
<script>
  // This function generates a factorial.
  function generateFactorial(form) {
    var num;   // a user-entered number
    var factorial; // factorial of num
    var count;  // multiplicand for factorial calculation
    
    num = form.elements["number"].valueAsNumber;
    factorial = 1;
    
    // The for loop:
    for (let count=2; count<=num; count++) {
      factorial *= count;
    }

    form.elements["result"].value = num + "! = " + factorial;
  } // end generateFactorial
</script>
```

### 6. The web page code in the prior exercise generates the factorial for a user-entered number. Why would it be inappropriate to replace the `while` loop with a `for...of` loop?

The `for...of` loop in JavaScript is used to iterate over arrays, strings, maps, sets, and more. This kind of loop iterates through each element in the array, which isn't our case.

### 7. Provide code that generates the following radio button group. You don’t need to provide code for a complete web page - just the code for a CSS rule and a container that generates the radio buttons, the border, and the border’s caption.

```html
<style>
  fieldset {display: inline;}
</style>
...
<fieldset>
  <legend>Gender</legend>
  <input type="radio">male
  &nbsp;&nbsp;
  <input type="radio">female
</fieldset>
```

### 8. CSS uses the name `background-color` for the property that defines the background color for an element. JavaScript uses the name `backgroundColor` for the associated property in the JavaScript world. Using the same spelling would make things easier on web developers. So why didn’t JavaScript’s inventor use `background-color` for the JavaScript property name?

JavaScript and CSS were developed separately. In coming up with names for the object's properties, JavaScript’s designer (Brendan Eich) probably wanted to mimic CSS names, but realized the hyphen would be interpreted as a minus sign in JavaScript and that would lead to errors.

### 9. The `className` property stores an element’s `class` attribute value as a string. If the `class` attribute has multiple values, those values are separated by spaces. To add or remove values, you have to process those space separators. The `classList` property stores an element’s `class` attribute value as a collection of values. To add or remove values, you can call its `add` or `remove` methods. How can Figure 10.15C’s `applyFontSelections` function be modified so it uses the `classList` property to add values to the message element’s class attribute?

Here is the modified version of the `applyFontSelections` function:

```javascript
  function applyFontSelections(form) {
    var fontFeatureCBs; // collection of checkboxes
    var message;        // message element
  
    message = document.getElementById("message");
    message.style.fontSize =
      form.elements["fontSize"].value;
    fontFeatureCBs = form.elements["otherFontFeatures"];

    if (fontFeatureCBs.length > 0) {
      message.className = "";  // erase the class "hidden"
      for (let fontFeature of fontFeatureCBs) {
        if (fontFeature.checked) { 
          // add selected classes using classList.add
          message.classList.add(fontFeature.value);
        }
      } // end for  
    }
  } // end applyFontSelections
```

### 10. Assume the following code is part of a working web page. The prefix-mode decrement operator works the same as the prefix-mode increment operator, except subtraction is performed instead of addition. What message will `console.log` display?

```javascript
var a = b = 10;
var c = d = 20;
console.log("a = " + ++a + ", b = " + b++ +
"\nc = " + --c + ", d = " + d--);
```

The `console.log` will display the following message:

```
a = 11, b = 10
c = 19, d = 20
```

> Written with [StackEdit](https://stackedit.io/).
