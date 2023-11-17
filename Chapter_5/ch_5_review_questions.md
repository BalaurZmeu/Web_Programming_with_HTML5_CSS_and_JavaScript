# Chapter 5 Review Questions

### 1. For each of the following elements, what is its HTML start tag?
**a) A table row element**
**b) An element within a table row that holds data**
**c) An element in the top row of a table that describes the data in the column below**

**My answer:**
a) `<tr>` this element defines a row of cells in a table.
b) `<td>` this element defines a cell of a table that contains data.
c) `<th>` this element defines a cell as the header of a group of table cells.

### 2. Using type selectors, write a CSS rule that creates a thin solid single-line border around all tables and uses a single line to separate adjacent columns and adjacent rows.

**My answer:**
```css
table, th, td {
  border: thin solid black;
  border-collapse: collapse;
}
```

### 3. Using type selectors, write a CSS rule that puts 5 pixels of padding around the text in each table header and data cell.

**My answer:**
```css
th, td {padding: 5px;}
```

### 4. Write a CSS structural pseudo-class selector that selects the odd table row elements, starting with the third one.

**My answer:**
```css
tr:nth-of-type(2n+3) {css-rule: value;}
```

### 5. What is the purpose of the `thead` element, and what is the purpose of the `tbody` element?

**My answer:** The `<thead>` element defines a set of rows defining the head of the columns of the table. It is useful for applying different CSS rules to the different groups of header cells.
The `<tbody>` element encapsulates a set of table rows (`<tr>`elements), indicating that they comprise the body of the table `<table>`. The `<tbody>` element is often used when you need to distinguish the left-side header cells of the table from the top header cells.

### 6. What does the following CSS rule do?
```css
body {display: flex; justify-content: center;}
```

**My answer:** The CSS rule above tells the `body` element to behave like a block-level element and to lay out its content according to the flexbox model. In the flex layout model, the children of a flex container can be laid out in any direction, and can "flex" their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent. The rule `display: flex`, means that the child items of the `body` element become flex items. 
The CSS `justify-content` property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container. The value `center` tells the items of the flexbox container to be packed flush to each other toward the center of the alignment container along the main axis.

### 7. Assume the following `style` and `body` elements are part of a complete html5 document.
**Provide a sketch that shows what the code displays.**
```html
<style>
th, td {padding: 5px 20px;}
table, th, td {
border: solid thin; 
border-collapse: collapse;
}
</style>
<body>
<table>
<tr> <th></th> <th colspan="2"></th> <th></th> </tr>
<tr> <td></td> <td></td> <td></td> <td></td> </tr>
<tr>
<td rowspan="3"></td> <td></td> <td></td>
<td rowspan="3"></td>
</tr>
<tr> <td></td> <td></td> </tr>
<tr> <td></td> <td></td> </tr>
</table>
</body>
```

**My answer:** 
The HTML code above displays a table. 
Here's a link: [review_question_7.html](Code_Examples/review_question_7.html)

### 8. What is a screen reader?

**My answer:** A screen reader is a software application that enables people with severe visual impairments to use a computer. A screen reader is a form of assistive technology that renders text and image content as speech or braille output. Screen readers are essential to people who are blind, and are useful to people who are visually impaired, illiterate, or have a learning disability.

### 9. For each HTML element, provide a CSS property-value pair that implements its presentation functionality.
**a) `table`**
**b) `caption`**
**c) `tr`**
**d) `td`**

**My answer:**
a) 
```css
table, th, td {
border: thick solid green;
border-collapse: collapse;
}
```
b)
```css
caption {font-size: 1.2em;}
```
c)

```css
tr {padding: 5px 10px;}
```
d)

```css
td {background-color: lightgreen;}
```

### 10. Why is the div element a good choice for CSS implementation of table and row components?

**My answer:** The `div` element is good for implementing table components because, with one exception, it's a generic container element. That means it doesn’t add any formatting features of its own. The exception to that rule is that browsers generate newlines around `div` elements. That works great for implementing tables, captions, and rows because each of those entities is supposed to be surrounded by newlines.

### 11. The `display: table-cell` property does not work well with elements in the embedded category like `img`, `audio`, and `video`. How can you work around this problem?

**My answer:** The problem here arises because a table cell is supposed to be a container for content. The `img` element is a void element, not a container (as well as `audio` and `video` elements), so it’s inappropriate to try to use CSS to turn it into a table cell. The solution is to surround the `img` element with a `span` or a `div` container and use the container as the target for a table-cell rule.

### 12. Describe how to apply absolute positioning to an element.

**My answer:** To apply absolute positioning to an element, one should use the `position` property with the value `absolute`. With the absolute positioning the element is removed from the normal document flow, and no space is created for the element in the page layout. The element is positioned relative to its closest positioned ancestor (if any) or to the initial containing block. Its final position is determined by the values of `top`, `right`, `bottom`, and `left`.
```css
.box {position: absolute;}
```

### 13. With absolute positioning, the top and left properties indicate the position of the target element’s top-left corner relative to what?

**My answer:** In this case the top and left properties indicate the position of the target element's top-left corner relative to its containing block or relative to the closest positioned ancestor. Typically, an element’s containing block resolves to the web page’s `html` element.

### 14. What CSS properties establish offsets from container sides to corresponding component sides?

**My answer:** The CSS properties that establish offsets from container sides to corresponding component sides are `top`, `right`, `bottom`, and `left`. The effect of `top`, `right`, `bottom`, and `left` depends on how the element is positioned. When `position` is set to `absolute` or `fixed`, the `top`, `right`, `bottom`, and `left` properties specify the distance between the element's outer margins of edges and the inner borders of the edges of its containing block.

### 15. With relative positioning, the `top` and `left` properties indicate the position of the target element’s top-left corner relative to what?

**My answer:** With relative positioning, the `top` and `left` properties indicate the position of the target element’s top-left corner relative to the element’s normal flow within its surrounding content. With relative positioning the element is positioned according to the normal flow of the document, and then offset _relative to itself_ based on the values of `top`, `right`, `bottom`, and `left`. The offset does not affect the position of any other elements; thus, the space given for the element in the page layout is the same as if position were `static`.

### 16. If you apply the `position: relative` property-value pair to a container, that container can then serve as a containing block for absolute positioned elements inside it. True or false.

**My answer:** True. When you apply the `position: relative` property-value pair to a container, it becomes a containing block for absolutely positioned elements inside it. This means that the absolutely positioned elements are positioned relative to the nearest positioned ancestor. The `position: relative` property on a container establishes a new positioning context for its child elements with `position: absolute`. If no ancestor elements have a `position` property set (other than the default `static`), the containing block is the initial containing block, usually the viewport.

> Written with [StackEdit](https://stackedit.io/).
