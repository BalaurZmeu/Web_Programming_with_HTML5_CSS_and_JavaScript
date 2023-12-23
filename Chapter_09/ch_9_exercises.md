# Chapter 9 Exercises

### 1. You can use `window.history` to retrieve the `history` object. Using the `history` object, what methods can you call to navigate backwards and forward to web pages that have been visited recently? The answer is not in the book. See https://developer.mozilla.org/en-US/docs/Web/API/History.

You can use the `history` object's `back()` method to navigate backward and the `forward()` method to navigate forward through the recently visited web pages.

### 2. Refer to the Lie Detector web page’s code shown earlier in the chapter. Think about the situation where the alert message displays “your reply was false.” Describe the type of person who would generate that output—someone who always tells the truth, someone who always lies, or some other type of person?

This alert message displays in case the user clicks the "Cancel" button. It doesn't matter if the person is someone who always tells the truth or someone who always lies. The `confirm` method returns `false` when the "Cancel" button is clicked.

### 3. This code comes from the part of the chapter that describes how to continue a string with "\\":

```html
<script>
prompt("Of the following U.S. Presidents, which one" +
" did not die on July 4?\n \
a) John Adams\n \
b) Thomas Jefferson\n \
c) James Monroe\n \
d) Ronald Reagan", "");
</script>
```

#### Provide new code for the first three lines (the first line is `<script>`) such that you use "\\" instead of "+" for the string continuation mechanism. Make sure that the resulting dialog’s message looks the same as the original dialog’s message. Hint: In order to get the resulting message to look good, you might have to compromise your coding style a bit.

```html
<script>
prompt("Of the following U.S. Presidents, which one \
did not die on July 4?\n \
...");
</script>
```

### 4. You should get into the habit of writing test code that helps you understand things. In Section 9.9’s String Methods subsection, there’s a code fragment that calls `toUpperCase` and `toLowerCase`. Provide an `alert` method call that shows the code fragment’s effect. Specifically, your `alert` method call should produce the following dialog. Your code should produce the `alert` message precisely—don’t forget the spaces, the quotes, the new lines, and so on.

```html
<script>
  var host;
  host = window.location.host;
  var exclamation = "Holy Cow!";
  var exclamationUpper, exclamationLower;
  exclamationUpper = exclamation.toUpperCase();
  exclamationLower = exclamation.toLowerCase();
  alert(host + " says:\n\n" +
    "exclamation = " + "\"" + exclamation + "\"\n" +
    "exclamationUpper = " + "\"" + exclamationUpper + "\"\n" +
    "exclamationLower = " + "\"" + exclamationLower + "\"");
</script>
```

### 5. Given the following code fragment. What are the resulting values in `var1`, `var2`, `var3`, `var4`, and `var5`?

```javascript
var name = "Cat in the Hat";
var1 = name.length;
var2 = name.charAt(5);
var3 = name.indexOf(" ");
var4 = name.indexOf("t", 4);
var5 = name.lastIndexOf("t");
```

```javascript
var1 = 14;
var2 = "n";
var3 = 3;
var4 = 7;
var5 = 13;
```

### 6. Given the following code fragment. What are the resulting values in `var1`, `var2`, `var3`, and `var4`?

```javascript
var name = "Anna banana";
var1 = name.substring(4, 8) + " ";
var2 = var1.trim();
var3 = name.replace("an", "ri");
var4 = name.substring(5);
```

```javascript
var1 = " ban ";
var2 = "ban";
var3 = "Anna briana";
var4 = "banana";
```

### 7. How is the `label` element helpful for web accessibility?

By using a `label` element and tying it to a control, you enable a screen reader’s speech synthesizer to speak the label’s text as a prompt for the control. That way, the visually impaired user knows how and what to input.

### 8. Suppose you have a button that is placed outside of a web page’s `form`. What’s the best way to associate the button with the `form`, so that when the user clicks the button, it’s straightforward for the form’s controls to get processed?

To connect the button to the form, use the `form` attribute with a value equal to the form's `id` value.

```html
<form id="subscribeForm">
...
</form>
<input type="button" form="subscribeForm" value="Submit"
onclick="sendData(this.form);">
```

### 9. Given this code fragment:

```javascript
if (lineSize) {
  alert("There are " + lineSize + " people in line.");
}
else {
  alert("The line is empty.");
}
```

#### a) If `lineSize` is 0, what’s the output?
#### b) If `lineSize` is 5, what’s the output?

a) The line is empty.
b) There are 5 people in line.

### 10. Sometimes, JavaScript’s `==` operator is slightly slower than the identity operator. In what situation is that the case?

The `==` operator in JavaScript performs type coercion, attempting to convert operands to the same type before making the comparison. This process of type coercion can make the `==` operator slightly slower than the identity (`===`) operator when comparing values of different types. The identity operator (`===`) performs strict equality comparison without type coercion.

### 11. Assume this:

```javascript
var x = 15;
var y = .4;
```

#### Evaluate the following expressions. Show your work, using a separate line for each evaluation step.
#### a) 4 - x / 2 + y
#### b) x % 4 + 4 % x
#### c) 2 \*\* 3 / 2 * 3
#### d) y != 0 && !(y > 4 || true)

a)

```javascript
4 - x / 2 + y;
4 - 15 / 2 + .4;
4 - 7.5 + .4;
-3.5 + .4;
-3.1;
```

b)

```javascript
x % 4 + 4 % x;
15 % 4 + 4 % 15;
3 + 4;
7;
```

c)

```javascript
2 ** 3 / 2 * 3;
8 / 2 * 3;
4 * 3;
12;
```

d)

```javascript
y != 0 && !(y > 4 || true);
.4 != 0 && !(.4 > 4 || true);
.4 != 0 && !(false || true);
.4 != 0 && !true;
.4 != 0 && false;
true && false;
false;
```

> Written with [StackEdit](https://stackedit.io/).
