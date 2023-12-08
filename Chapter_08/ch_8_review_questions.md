# Chapter 8 Review Questions

### 1. Which is JavaScript closer to - LiveScript or Java?
**My answer:** LiveScript is a functional programming language that transpiles to JavaScript. JavaScript was also called LiveScript for a few months before the official release. I think JavaScript is closer to LiveScript than to Java.

### 2. What is ECMAScript?
**My answer:** The ECMAScript specification is a standardized specification of a scripting language developed by Brendan Eich of Netscape initially named Mocha, then LiveScript, and finally JavaScript. Eich commented that "ECMAScript was always an unwanted trade name that sounds like a skin disease."

### 3. For a button control, what does the `input` element’s `value` attribute specify?
**My answer:** The `value` attribute of the `input` element for a button specifies the text that appears on the button. For example:
```html
<input type="button" value="Click Me!">
```

### 4. What is an event handler?
**My answer:** The event handler is JavaScript code inside the attribute that calls this code when the specified event is occuring. For example clicking the button is considered to be an event, so the `onclick` attribute’s JavaScript code is known as an event handler. Besides `onclick`, there are other attributes that call event handlers, like `onfocus` and `onload`.
```html
<input type="button" value="Click Me!" onclick="displayHello();">
```

### 5. What is a keyword? Provide two examples.
**My answer:** Keywords are the words that are part of the JavaScript or any other programming language. For example in JavaScript the words `var`, `for` and `function`are keywords. One cannot use these words for naming variables or functions.

### 6. In JavaScript, what is a property?
**My answer:** A property is an attribute of an object. The `document` object contains properties like the web page’s `type`. Most web pages these days have a value of HTML5 for the `document` object’s `type` property.

### 7. An id attribute’s value must be unique for a particular web page. True or false.
**My answer:** True. The HTML5 standard says that an `id` attribute’s value must be unique for a particular web page. When one uses an `id`attribute to identify a target for a link or to retrieve an element with `getElementById` within a web page it is necessary for the `id` attribute to be unique so there won’t be any confusion in terms of which element to target.

### 8. What are the three types of nodes in the DOM’s node tree?
**My answer:** 

 - Elements (like `<p></p>`)
 - Text items inside the elements (`<p>TEXT</p>`)
 - Attributes within one of the elements (`<p class="attribute">`)

### 9. What object is the root node of the DOM’s node tree?
**My answer:** The root node of the DOM's node tree is the `document` object. It contains every other object of the webpage within itself.

### 10. What’s the difference between the text control’s `size` attribute and its `maxlength` attribute?
**My answer:** While the `size` attribute specifies the text control’s width, the `maxlength` attribute specifies the maximum number of characters that can be entered in the box. So `size="5"` means approximately 5 characters could display in the box simultaneously and entries that exceed the box’s width will cause input scrolling to occur until the number of characters will achieve the number specified with the `maxlength` attribute.

### 11. What’s an empty attribute?
**My answer:** An empty attribute is an attribute that doesn't require any value assigned to it. For example the `input` element has the `autofocus` attribute, which is specified by itself, without any value.
```html
<input type="text" autofocus>
```

### 12. What is the `this` keyword?
**My answer:** The `this` keyword refers to the object that contains the JavaScript in which `this` appears. For example:
```html
<input type="button" value="Generate Email"
onclick="generateEmail(this.form);">
```
In this example, the enclosing object is the button's element object.

### 13. What operator is in charge of connecting a string to something else to form a larger string?
**My answer:** The concatenation operator, `+`. `'Hello' + ', ' + 'world!'` results in `'Hello, world!'`

### 14. The most common syntax for comments is `//`. When is it appropriate to use the `/* … */`syntax for comments?
**My answer:** In JavaScript `//` is used for short, one-string comments. And the `/* ... */` is used for long, descriptive, often multi-line comments.

### 15. What is the scope of a local variable?
**My answer:** By using the keyword `var`, you can use same-named variables in different functions, and the JavaScript engine creates separate local variables. A local variable is a variable that can be used only within the function in which it is declared.
```JavaScript
var username;
```

### 16. To implement a rollover with JavaScript, what two event-handler attributes should you use?
**My answer:** To implement a rollover with JavaScript, one can use the 	`onmouseover` and `onmouseout` event-handler attributes.
```html
<img scr="Work.jpg" onmouseover="this.src='Rest.jpg';" onmouseout="this.src='Work.jpg';">
```

### 17. List several security measures that are built into JavaScript.
**My answer:** JavaScript is designed to have limited capabilities. For example, JavaScript is unable to access a user’s computer in terms of the computer’s files and what’s in the computer’s memory. Also, JavaScript can send requests to web servers only in a constrained (and safe) manner.

### 18. What is the purpose of the `noscript` element?
**My answer:** To display a message on those browsers that have JavaScript disabled, use the `noscript` element. Specifically, add a `noscript` container to the top of your body container, and insert explanatory text inside the `noscript` container. Here’s an example:
```html
<noscript>
<p>
  This web page uses JavaScript.
  For proper results, you must use a 
  web browser with JavaScript enabled.
</p>
</noscript>
```

> Written with [StackEdit](https://stackedit.io/).
