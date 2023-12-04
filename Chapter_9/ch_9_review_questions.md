# Chapter 9 Review Questions

### 1. What property of the `window` object retrieves an object that stores information about the current web page’s URL?

**My answer:** `window.location` retrieves an object containing information about the current web page's URL in JavaScript.

### 2. What’s the purpose of the `window` object’s `navigator` property?

**My answer:** The `window.navigator` property in JavaScript provides information about the browser's capabilities and settings, including details about the user's browser and device.

### 3. Which is the more common way to get information from a user—with a control on a browser window or with a dialog?

**My answer:** The more common way to get information from a user is through a form control on a browser window rather than using a dialog. Forms are widely used for user input, while dialogs are generally reserved for specific interactions or alerts.

### 4. The `alert` dialog is considered to be a modal window. True or false.

**My answer:** True. The `alert` dialog in JavaScript is considered a modal window because it halts the execution of code until the user dismisses the dialog.

### 5. What is a block statement?

**My answer:** A block statement is zero or more statements surrounded by braces.

### 6. What are the significant differences between the `confirm` method and the `prompt` method?

**My answer:** The `confirm` method is used to display a dialog with OK and Cancel buttons, returning a boolean value based on the user's choice. On the other hand, the `prompt` method displays a dialog with an input field for the user to enter information, returning the entered text as a string or null if canceled.

### 7. What is the empty string?

**My answer:** The empty string is two quotes with nothing in between (""), which indicates that the string has no characters.

### 8. If a user sees a `prompt` dialog box and clicks Cancel or clicks the close-out X button, what value does the `prompt` method return?

**My answer:** In such case the `prompt` method returns a null value.

### 9. What escape sequence should you use to display a double quote within an `alert` dialog message?

**My answer:** You should use the escape sequence \".

### 10. What is \n?

**My answer:** Escape sequence for the newline character.

### 11. For string objects, is `length` a property or a method?

**My answer:** A property. A property is a value associated with an object, while a method is a function associated with an object. Properties represent data, and methods represent actions that can be performed with the object.

### 12. What does `Math.ceil()` do?

**My answer:** `Math.ceil()` in JavaScript returns the smallest integer greater than or equal to a given number. It rounds a number up to the nearest integer.

### 13. What does `Math.floor()` do?

**My answer:** `Math.floor()` in JavaScript returns the largest integer less than or equal to a given number. It rounds a number down to the nearest integer.

### 14. What does the `:first-child` pseudo-class do?

**My answer:** The `:first-child` pseudo-class in CSS selects the first child element of its parent.

### 15. For a number control, what attribute indicates that the user must enter a value?

**My answer:** The `required` attribute.

### 16. For a number control, what attributes determine the range for the number control’s spinner?

**My answer:** The `min` and `max` attributes.

### 17. What does the following selector do?

`input:valid:focus`

**My answer:** The selector `input:valid:focus` targets an `<input>` element that is both valid and currently in focus (actively selected by the user).

### 18. Which operators have right-to-left associativity?

**My answer:** Not operator (!), exponentiation operator (**), and assignment operators (+=, -=, …).

### 19. Assume the following:
```javascript
var num = 9;
var x = 3.0, y = 6.2;
```
**Evaluate the following expressions. Show your work, using a separate line for each evaluation step.**
```javascript
a) x + num / 2 % 2
b) x >= 4 || y < 7 && num != 3 ** 2
```

**My answer:**
a)
```javascript
x + num / 2 % 2 
3.0 + 9 / 2 % 2 
3.0 + 4.5 % 2 
3.0 + .5 
3.5
```
b)
```javascript
x >= 4 || y < 7 && num != 3 ** 2 
3.0 >= 4 || 6.2 < 7 && 9 != 3 ** 2 
3.0 >= 4 || 6.2 < 7 && 9 != 9 
false || true && false 
false || false
false
```

### 20. If you use a `form` object to call the `checkValidity` method, what happens?

**My answer:** If you use a `form` object to call the `checkValidity()` method, it returns `true` if all of the form’s controls hold valid input and `false` otherwise.

> Written with [StackEdit](https://stackedit.io/).
