# Chapter 4 Exercises

**1. Provide a type selector CSS rule for the `ul` element that causes list items to be displayed with check mark symbols (✓) at the left. The `list-style-type` property does not include a value for the check mark symbol. To display check mark symbols, you will need to use the `list-style-image` property, which was not covered in the book. In your answer, use the filename `checkMark.gif`.**

**My answer:**
```css
ul {list-style-image: url("../images/checkMark.gif");}
```

**2. Provide a style container that could be used to produce this web page:** 

**Your style container must:**
- **Implement an appropriate type selector rule that renders the outline with a yellow background color.**
- **Implement appropriate class selector rules for the underlined and boldfaced words.**
- **Your style container must work in conjunction with the following body container. You are to use the body container as is; you are not allowed to modify it.**
```html
<body>
<h2>CS 201 Fan Club</h2>
<hr />
<div>
Top three reasons to love CS 201 Client-Side Web Programming:
<ul>
<li><span class="underlined">Exciting</span> lectures</li>
<li><span class="superFun">Super-fun</span> homework assignments</li>
<li>Excellent exams</li>
</ul>
</div>
</body>
</html>
```

**My answer:**
```html
<style>
ul {background-color: yellow;}
.underlined {text-decoration: underline;}
.superFun {font-weight: bold;}
</style>
```

**3.  In addition to unordered and ordered lists, there’s also a description list, which was not covered in the book. A description list can be used to implement a glossary of terms and definitions. Provide the code for a description list that defines three or more video game terms.**

**My answer:**
```html
<dl>
  <dt>Noob</dt>
    <dd>An inexperienced gamer.<dd>
  <dt>NPC</dt>
    <dd>Non-player character.<dd>
  <dt>OP</dt>
    <dd>Overpowered gun or ammo.<dd>
</dl>
```

**4. By default, an `aside` element displays on a line (or lines) by itself. What CSS property should you use to make it display next to another element, so the two elements share the same line?**

**My answer:** The `aside` element is one of the many organizational elements in HTML. Organizational elements are block elements, so they span the entire width of the web page by default. A common way to undo that default behavior for the `aside` element is to “float” the `aside` element to the left or right by using the CSS `float` property.
```css
aside {float: right;}
```

**5. What entity forms the lowest priority rung in the cascade of places where CSS rules can be defined?**

**My answer:** The CSS rules defined by default in the browser settings have the lowest priority.

**6. What is the difference between a child selector and a descendant
selector? In your answer, you must: 
(1) explain what they are for
(2) provide an example child selector
(3) provide an example descendant selector**

**My answer:** Child selector's purpose is to target the elements that are inside the parent element and don't have any intermediary container elements. Descendant selector's purpose is to target specific elements that are inside the parent element, including child elements. Here's an example of both:
```html
<style>
.colored li {background-color: lightblue;} /* descendant selector */
p > q {color: red;} /* child selector */
</style>
...
<body>
<p class="colored">
This is a paragraph.
  <ul>
    <li>This item is inside the paragraph.</li>
    <li>This item isn't a child of the paragraph.</li>
    <li>This item's backgound color is light blue.</li>
  </ul>
</p>
<p>
This is another paragraph.
<q>This is a quote. The text of this quote is red.</q>
The quote element above is a child of the paragraph element.
</p>
</body>
```

**7. Assuming the rest of the web page’s code is valid, the following code fragments generate a nested list with three borders.
a) describe what each of the three borders surrounds
b) for each rule, describe which element(s) the rule applies to**
```html
<style>
ul li {border-style: solid;}
ul > li {border-color: red;}
</style>
...
<body>
<ul>
<li>one</li>
<li>two
<ol>
<li>three</li>
</ol>
</li>
</ul>
</body>
```

**My answer:** The code above displays an unordered list with a nested ordered list. The two items (***one*** and ***two***) of the unordered list are surrounded by the red colored borders each. The nested ordered list is placed inside the list item ***two*** and has one item (***three***), with a black colored border. The border of the ***two*** item surrounds the ***three*** item and its black border. The structure looks like this:
* one
* two
    1. three

**8. Assuming the rest of the web page’s code is valid, the following code fragments generate a nested list.
a) describe the font size and color for each of the three list items
b) for each rule, describe which element(s) the rule affects and whether the effect comes from the rule directly matching that element or whether it comes from CSS inheritance**
```html
<style>
ol > li {font-size: 200%;}
ul {color: blue;}
.green {color: green;}
</style>
...
<body>
<ul>
<li>one
<ol>
<li>two
<ul>
<li class="green">three</li>
</ul>
</li>
</ol>
</li>
</ul>
</body>
```

**My answer:** The text of the list item of the outer unordered list (***one***) is displayed with the regular font size and blue color. The text of the list item of the nested ordered list (***two***) is displayed with the font size of 200% and blue color. The text of the list item of the unordered list nested inside the ordered list (***three***) is displayed with the regular font size and green color.
***one***) 
font-size: default (inherited); 
color: blue (inherited from the `ul`)
***two***)
font-size: 200% (directly matching); 
color: blue (inherited from the outer `ul`)
***three***)
font-size: default (inherited); 
color: green (directly matching)

> Written with [StackEdit](https://stackedit.io/).
