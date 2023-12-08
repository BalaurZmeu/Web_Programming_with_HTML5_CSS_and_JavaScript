# Chapter 2 Review Questions

### 1. Web browsers are strict in terms of forcing developers to write good code. True or false.

**My answer:** False. Browsers are very forgiving in terms of requiring web developers to write high-quality code. So even if a web page’s code uses improper syntax or improper style, web browsers won’t display an error message; instead, they’ll try to render the code in a reasonable manner. Despite that, in order to make the code readable and maintainable developers should apply coding-style conventions and write good code.

### 2. Who developed the original HTML Tidy tool? Name one person.

**My answer:** The original HTML Tidy tool was developed by Dave Raggett. Dave Raggett, a British computer scientist, played a significant role in the early development of HTML and web standards. HTML Tidy is a tool designed to clean up and format HTML code, making it more readable and compliant with web standards. While Dave Raggett initiated the project, HTML Tidy has seen contributions from various developers over the years.

### 3. What is a browser engine?

**My answer:** The browser engine is the software inside a web browser that reads a web page’s content (e.g., HTML code, image files) and formatting information (CSS), and then displays the formatted content on the screen.

### 4. What is documentation?

**My answer:** In the world of software development, documentation refers to a description of a program. That description can be in the form of a document completely separate from the source code (like a user guide), or it can be embedded in the source code itself. Comments are one form of embedded-­code documentation.

### 5. Using the Content model categories diagram, specify five categories that are completely inside the flow category.

**My answer:** Most elements that are used in the body of documents and applications are categorized as flow content. Here are some examples of flow elements: `<a>`,`<button>`,`<canvas>`,`<div>`,`<footer>`,`<input>`.

### 6. Provide two characteristics of a block element.

**My answer:** Block-level HTML elements are characterized by two main features:

1. **Stacking and Structure:**
   - Block elements typically create a new block-level box in the document's structure, stacking elements vertically. Each block-level element starts on a new line and extends the full width of its containing element, creating a distinct block within the document flow.

2. **Box Model:**
   - Block elements adhere to the box model, which includes properties like width, height, margin, border, and padding. These elements can have specified dimensions, margins around them, borders, and padding within. This makes block elements well-suited for creating structured layouts and dividing content into visually distinct sections. Examples of block elements include `<div>`, `<p>`, `<h1>` to `<h6>`, `<ul>`, `<ol>`, and `<li>`.

### 7. What are the typical default display properties for a `blockquote` element?

**My answer:** Typical default display properties for the `blockquote` element are: 1em top and bottom margins, and 40px left and right margins. But as an alternative, a browser vendor (an organization that implements a browser) may render a `blockquote` element by displaying the text with italics and not with margins.

### 8. What are three characters that are subject to whitespace collapsing?

**My answer:** If your HTML code contains consecutive blank spaces, newlines, or tabs, the browser will display the web page with only one whitespace character (usually a blank space).

### 9. In the world of web programming, what does “presentation” mean?

**My answer:** Presentation refers to the appearance and format of a displayed element. You can assume that browsers will display the text with an appropriate appearance, but that appearance might be different for different browsers from different vendors.

### 10. What is the difference between a `q` element and a `blockquote` element?

**My answer:** The `q` element is used for quoted text that is to be rendered within the flow of surrounding text. That’s different from the `blockquote` element, which spans the width of its container. Also, browsers display a `q` element by surrounding its text with quotes.

### 11. Times New Roman is an appropriate font for displaying code because it enables you to align similar types of things within your program. True or false.

**My answer:** False. Monospace font is appropriate for displaying code because its symbols, letters and spaces has equal width, which makes it easier to align and read. Times New Roman is not appropriate for code.

### 12. What does “wbr” stand for?

**My answer:** The `wbr` element (wbr stands for “word break”) is similar to the `br` element in that it’s a void element. But whereas the browser treats `br` as a required break between words, the browser treats `wbr` as a suggested break within a word if the word bumps into the right side of its containing box.

### 13. When you want to display a quote character (“) on a web page, you should normally use the `&quot;` character reference. True or false.

**My answer:** False. Normally, if you wish to display a " or ', you should simply use a " or ' and the character will display as is. But in case if the attribute value is text that includes a quote mark inside the text, then make sure to use a character reference for the quote mark inside the text. If you use a quote character instead, the browser will treat it as the end of the attribute value’s string. 
Here's the example that would not work:
```html
<p>
Originally, <abbr title=""Music" Television">MTV</abbr> actually played music.
</p>
```
Here's the corrected code:
```html
<p>
Originally, <abbr title="&quot; Music &quot; Television">MTV</abbr> actually played music.
</p>
```

> Written with [StackEdit](https://stackedit.io/).
