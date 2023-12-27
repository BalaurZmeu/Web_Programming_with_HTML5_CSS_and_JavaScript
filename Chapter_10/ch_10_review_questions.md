# Chapter 10 Review Questions

### 1. What’s the term for a loop that repeats forever?

Infinite loop. It happens when the loop's exit condition is never satisfied, leading to the continuous execution of the loop's body. Infinite loops can occur unintentionally if there's a logical error or if the loop condition is not properly updated within the loop's body. In practice, infinite loops can lead to performance issues, freezing applications, or causing programs to become unresponsive. It's important to carefully design loop conditions to ensure that loops terminate when expected.

### 2. External JavaScript files can help reduce redundant code. Why is redundant code bad?

Redundant code refers to portions of a program that are repetitive, unnecessary, or provide no additional functionality. One common example is duplicating the same JavaScript code within the `<script>` element of multiple HTML files. To eliminate redundancy and enhance maintainability, it's advisable to use an external JavaScript file that can be shared and accessed by all HTML files. This not only promotes a more organized and modular code structure but also ensures that updates or modifications are reflected uniformly across all associated HTML files, reducing the risk of inconsistencies and improving code maintainability.

### 3. What’s the file extension for an external JavaScript file?

The file extension for an external JavaScript file is `.js`.

### 4. In an external JavaScript file’s prologue, what goes inside the asterisk box?

A prologue’s asterisk box should contain the filename, the programmer’s name, a blank line, and a description of what the file’s code is for.

### 5. With Chrome, which keys do you press to load its debugger tool?

To load Chrome’s debugger, press Ctrl + Shift + j. To open developer tools in Firefox, press Ctrl + Shift + i.

### 6. When should you use a `do` loop?

Use a `do` loop when you’re sure that the loop body should be executed at least one time before checking the condition.

### 7. What are the two possible values a Boolean variable can hold?

In JavaScript, a Boolean variable can hold two possible values: `true` and `false`.

### 8. Suppose you have a collection of radio buttons named `years`. Using `[]` notation, how can you access the first radio button?

Using square brackets, I can access the first element of a collection of radio buttons named `years` like this:

```javascript
// years = document.getElementById("inputRadioBtns").elements
years[0]
```

### 9. If you have a radio button group with none of the radio buttons selected, what does the radio button collection’s `value` property return?

If you have a radio button group with none of the radio buttons selected, the radio button collection’s `value` property returns an empty string.

### 10. What does a radio button object’s `defaultChecked` property return?

A radio button object’s `defaultChecked` property returns `true` or `false`, for whether the radio button's HTML element has the argument `checked`, which selects the radio button in advance.

### 11.  If you’d like to form a collection of checkboxes (as opposed to a standalone checkbox), what code do you need to include with each checkbox?

If you’d like to form a collection of checkboxes, include a `name` attribute with the same value in each checkbox element.

### 12. Is it legal to have a space within a `class` attribute’s value? Within an `id` attribute’s value? Within a `name` attribute’s value? Within a `value` attribute’s value?

Here’s what’s legal:
`class` attribute value: spaces are used as delimiters when
multiple classes are applied to the same element
`id` attribute value: spaces are not allowed
`name` attribute value: spaces are allowed
`value` attribute value: spaces are allowed

### 13. What are the three components in a standard `for` loop’s heading?

The three components in a standard for loop’s heading are the initialization, condition, and update components. We can also apply a mnemonic technique to memorize it better. For example ICU ("I see you") which stands for initialization, condition, and update.

### 14. When should you use a standard `for` loop?

 You should use a standard `for` loop if you know the exact number of loop iterations before the loop begins.

### 15. What is the name of the JavaScript property associated with the HTML `class` attribute?

The JavaScript property associated with the HTML `class` attribute is `className`. This is because the `class` is a reserved JavaScript keyword.

### 16. What is the name of the JavaScript property associated with the HTML `style` attribute?

The JavaScript property associated with the HTML `style` attribute is also called `style`.

### 17. Both of the `display: none` and `visibility: hidden` property-value pairs cause their matched elements to not display. What’s the functionality difference between the property-value pairs?

With `visibility: hidden`, the browser provides layout space for the element, whereas `with display: none`, no space is provided.

### 18. If two elements overlap and one element has a `z-index` value of 0 and the other element has a `z-index` value of -1, what happens in terms of how they’re displayed?

The element with a `z-index` value of 0 displays in front of the other element. The overlapping elements with a larger `z-index` cover those with a smaller one.

### 19. What is a variable’s persistence?

Variable persistence refers to the duration or lifetime of a variable within a program. It determines how long the variable retains its value and remains accessible in the memory during the execution of the program. The two main types of variable persistence are:

1.  **Global Variables:** These variables have a global scope and persist throughout the entire program. They are declared outside of any function or block and can be accessed from any part of the code.
2. **Local Variables:** These variables have a local scope and exist only within the block or function where they are declared. They are created when the block is entered and cease to exist when the block is exited.

### 20. Suppose a function is called, and it updates a global variable. If the function is called a second time, will the updated variable’s value be remembered, or will it be reset to its original `undefined` value?

If the function is called a second time, a global variable’s previous value will be remembered. The global variable's value can also be accessed and modified by other functions.

### 21. Suppose you have a variable named `recommendation` that holds a `textarea` object. What code can you use to clear the `textarea`’s box so it’s empty?

Here’s how you can clear a `recommendation` `text area`’s box:

```javascript
recommendation.value = "";
```

### 22. Where does the Chesnut Hall bass player live?

The bass player who's in the dorm's band gets the big suite in the dorm’s basement all to himself.

### 23. What does it mean if a list box object’s `selectedIndex` property is -1?

If a list box object’s `selectedIndex` property is -1, that means no options are selected.

> Written with [StackEdit](https://stackedit.io/).
