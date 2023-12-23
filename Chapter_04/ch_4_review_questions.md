# Chapter 4 Review Questions

### 1. Within a `ul` container, what is the only type of child element allowed?

The HTML5 standard does not allow the inner `ul` container to be a child of the outer `ul` container. The only element that’s allowed to be a child of a `ul` element is an `li` element. Thus, to implement a nested list, you need to have an `li` container in between the outer and inner `ul` containers. Here is an example:

```html
<ul id="parent-list">
  <li>Morning</li>
  <li id="list-container">
    <ul id="nested-child-list">
      <li>Wake up at 9ish.</li>
      <li>Go to school.</li>
    </ul>
  </li>
  <li>Evening</li>
</ul>
```

### 2. What CSS property-value pair should you use to indicate that a list’s items are to be displayed with no labels/symbols at their left?

The CSS property `list-style-type` with the value `none` will display list items with no symbols at their left.

```css
ul {list-style-type: none;}
```

### 3. Fill in the blank: When an element is inside an outer element’s start tag and end tag, we say that the element is a _________ of the outer element.

When an element is inside an outer element's start tag and end tag, such an element is called a ***descendant*** of the outer element. If it's a direct descendant and this element isn't nested inside another element, that is also a descendant of the outer one, it may be called a child element.  

### 4. For the `list-style-type` CSS property, what value should you use to generate lowercase roman numerals for list items?

To display the list items of the ordered list with lowercase roman numerals, the value `lower-roman` should be used for the `list-style-type` CSS property.

```css
ol {list-style-type: lower-roman;}
```

### 5. For the `ul` element, what does the start attribute do?

The start attribute causes list item labels to start at a specified position. The default is for list item labels to start at position 1. So, if the `ol` element’s attribute has a value of 52, it means that the first list item displays a label associated with the 52nd position.

```html
<ol start="52">
  <li>The fifty-second item.</li>
  <li>The fifty-third item.</li>
</ol>
```

### 6. To make a figure caption display at the bottom of the `figure`’s main content, you must position the `figcaption` element below the `figure` container. True or false.

False. If there is a `figcaption` element it must be inside a `figure` element. To display the caption at the bottom of the `figure`'s main content, the `figcaption` element should be positioned inside the `figure` element, under the main content of `figure`. Here's an example:

```html
<figure>
<pre><code>while (true)
{
alert("Your financial records have been compromised.\n" +
" To fix the problem, go to http://www.easyCredit.com" +
" and enter your credit card information.");
}</code></pre>
<figcaption>
Example 8.3. A credit card scam that uses a repeating pop-up
</figcaption>
</figure>
```

### 7. What `img` attribute is used to specify fallback content for an image?

The attribute `alt` is used to specify fallback content for an image. The `alt` attribute’s value should normally be a description of the picture, and it serves two purposes. It provides fallback content for the image in case the image is unviewable. Also fallback content is particularly useful for visually impaired users who have screen readers. Screen readers can read the `alt` text aloud using synthesized speech.

### 8. In general, what is the relationship between `section` and `article`? Just one `article` in a `section` container? One or more `section` elements in an `article` container? Or something else?

The `article` element is for grouping together one or more sections such that the group of `section` elements form an independent part of a web page.

### 9. Normally, what does a `nav` container contain?

The `nav` element is a container that normally contains links to other web pages or to other parts of the current web page. The `nav` element gets its name from 'navigate' because you use links to navigate to (jump to) other locations.

```html
<nav>
<a href="#about">About</a> | <a href="#contacts">Contacts</a>
</nav>
```

### 10. Suppose you have a header container that contains three heading elements. Suppose you want to assign a background color for the entire heading area. In terms of what is displayed, what problem would arise if you apply the background color to the individual heading elements rather than to the header container element?

If you use the CSS rule `background-color`with selectors `h1` and `h2`, you’ll get colored backgrounds for the three heading elements and a narrow white background in the margin area between them. To avoid this, you should apply the CSS rule with the `header` selector, to get a uniform background color for the entire heading area.

```css
header {background-color: lightblue;}
```

```html
<header>
  <h1>Best Pizza in the World</h1>
  <h2>Favorite Pizza Place</h2>
  <h2>You're my Favorite!</h2>
</header>
```

### 11. What is CSS inheritance?

CSS inheritance is when a CSS property value flows down from a parent element and applies to one or more of its child elements.

```css
body {text-align: center;}
```

```html
<body>
  <p>This text is displayed in the center of the page.</p>
  <p>This text is also displayed in the center.</p>
</body>
```

### 12. What does “overriding” mean in the context of CSS inheritance?

If a parent element and its child element have two different CSS rules with the same property specified, then the child element’s property-value pair (and not the parent element’s property-value pair) gets applied to the child element. Formally, we say that the child element’s property-value pair ***overrides*** the inherited ­property-value pair.

```css
body {text-align: center;}
#child-p {text-align: left;}
```

```html
<body>
  <p>This text is displayed in the center of the page.</p>
  <p id="child-p">This text is aligned to the left.</p>
</body>
```

> Written with [StackEdit](https://stackedit.io/).
