# Chapter 2 Exercises

### 1. Why do companies like their programmers to follow standard coding conventions?

Companies like their programmers to follow standard coding conventions so the resulting programs are easier to maintain (program maintenance means debugging and enhancing a program after it has been released initially). This is particularly true for medium- and large-sized companies, where programs are debugged and enhanced by a larger number of people. With more people involved, there’s a greater need to understand other people’s code, and adhering to standard coding conventions helps with that.

### 2. What does Google’s Style Guide have to say about trailing whitespace?

A trailing space is a space that is located after the final character in a text entry field. These might be difficult for you to see, because the space is blank, especially if you are entering multiple lines of text in a given field. Google's HTML/CSS Style Guide says: "Remove trailing white spaces. Trailing white spaces are unnecessary and can complicate diffs." Diff is a program that compares files in order to determine how or whether they differ.

### 3. Convert the following code so that it is compliant with HTML5 standards and also proper coding conventions. To ensure compliance with the HTML5 standards, I recommend that you enter your converted code into the W3C’s HTML validation service. To ensure proper coding conventions, please carefully review the HTML5 coding conventions document.

```html
<html>
<head>
<meta charset="utf-8">
<meta name="author" content="John Dean">
<title>Mock Trial How-To<title>
</head>
<body>
<H1>Mock Trial Opening Statements</H1>
<hr>
<strong><p>Prosecuting Attorney</strong>:<br>
Good morning, I am the prosecuting attorney, and I represent the
State. I will call three witnesses. At the conclusion of the case,
we will ask you to convict the defendant of the crime as charged,
thank you.
</p>
<p><strong>Defense Attorney</strong>:<br>
Ladies and Gentlemen of the jury, I intend to prove that my
client xxxxxx is innocent of the alleged murder of yyyyyy, and the
evidence presented by the prosecution is circumstantial.
</body>
```
Here's the solution:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="author" content="John Dean">
    <title>Mock Trial How-To</title>
  </head>

  <body>
    <H1>Mock Trial Opening Statements</H1>
    <hr>
    <p><strong>Prosecuting Attorney</strong>:<br>
      Good morning, I am the prosecuting attorney, and I represent the
      State. I will call three witnesses. At the conclusion of the case,
      we will ask you to convict the defendant of the crime as charged,
      thank you.
    </p>
    <p><strong>Defense Attorney</strong>:<br>
      Ladies and Gentlemen of the jury, I intend to prove that my
      client xxxxxx is innocent of the alleged murder of yyyyyy, and the
      evidence presented by the prosecution is circumstantial.
    </p>
  </body>
</html>
```

### 4. Suppose that your company requires you to include this copyright notice at the top of every one of your web pages:

**INVESTMENT INTELLIGENCE SYSTEMS CORP.
THIS MATERIAL IS COPYRIGHTED AS AN UNPUBLISHED WORK UNDER SECTIONS 104 AND 408 OF TITLE 17 OF THE UNITED STATES CODE. UNAUTHORIZED USE, COPYING, OR OTHER REPRODUCTION IS PROHIBITED BY LAW.**

**Show an HTML5 comment container that includes this copyright notice. As always, use proper coding conventions. Note that the copyright notice is a comment and, as such, it should not display on your web pages.**

```html
<!--
INVESTMENT INTELLIGENCE SYSTEMS CORP.  
THIS MATERIAL IS COPYRIGHTED AS AN UNPUBLISHED WORK UNDER
SECTIONS 104 AND 408 OF TITLE 17 OF THE UNITED STATES CODE.
UNAUTHORIZED USE, COPYING, OR OTHER REPRODUCTION IS PROHIBITED
BY LAW.
-->
```

### 5. This question gives you practice using the HTML5 language specification website to determine the permitted contents of elements. In your answers, specify one or more of the content model categories (such as “phrasing” or “flow”), or specify “empty.”

#### a) What are the permitted contents of the `blockquote` element?
#### b) What are the permitted contents of the `br` element?
#### c) What are the permitted contents of the `q` element?

All three elements belong to the flow content category.

**a)** Content inside a `blockquote` must be quoted from another source, whose address, if it has one, may be cited in the `cite` attribute.

**b)** Is an empty element. It also belongs to the phrasing content category. `br` elements must be used only for line breaks that are actually part of the content, as in poems or addresses.

**c)** The `q` element also belongs to the phrasing content category. Content inside a `q` element must be quoted from another source, whose address, if it has one, may be cited in the `cite` attribute. The source may be fictional, as when quoting characters in a novel or screenplay.

### 6. Provide an HTML5 code fragment for a paragraph element that displays this message:

**Attention Walmart shoppers:
Christmas sales begin September 15 at 5 am, just in time for the holidays.**

**You must provide code that enables JavaScript to understand the date and time. There is no need to provide the JavaScript code itself. For the date value, use the current year.**

```html
<div>
Attention Walmart shoppers:
Christmas sales begin <time datetime="2023-09-15">September 15</time>
at <time datetime="05:00">5 am</time>, just in time for the holidays.
</div>
```

### 7. Provide an HTML5 code fragment for a paragraph element that describes a solid-state device (SSD). Your paragraph must include at least two sentences, and in those sentences, you must include the acronym SSD. You must use an element that indicates that SSD is an acronym and another element that indicates that SSD is a term that is being defined. In your paragraph, you must include a definition for SSD. You must provide code that generates a tooltip for the words that SSD stands for.

```html
<p>
A <dfn>solid-state drive</dfn> is a solid-state storage
device that uses integrated circuit assemblies to store data
persistently, typically using flash memory, and functions as
secondary storage in the hierarchy of computer storage.
<abbr title="Solid State Drive">SSD</abbr> was first introduced
by SanDisk in 1991.
</p>
```
[Wikipedia](https://en.wikipedia.org/wiki/Solid-state_drive)

### 8. Using the b, u, and i elements is generally frowned upon. So why does the W3C include them in their HTML5 standard?

Historically, the `b`, `u`, and `i` elements have been used for presentation exclusively—`b` for bold, `u` for underline, and `i` for italics. Using HTML elements for presentation is anathema to the guiding principles set forth in the HTML5 standard. For presentation, you’re supposed to use CSS. Consequently, the W3C doesn’t really like the `b`, `u`, and `i` elements. But the elements have been used so much in the past that the organization feels compelled to support legacy code. Legacy code is code created in the past that uses commands supported by an older standard and not the current standard.

### 9. Provide a paragraph element that would render the following line. Use the browser’s default font face (there is no need to specify a font). There are two spaces between the two sentences. Display both spaces.

**The ampersand symbol is “&.” The greater than or equal symbol is “≥.”**

```html
<p>
The ampersand symbol is “&amp;.”&nbsp; The greater than or equal symbol is “&ge;.”
</p>
```

**10. Provide an HTML code fragment that would render the quadratic equation as follows:**

**x = (-b ±(b2 - 4ac)½) / 2a**

**Note:**

#### 10.1. You don’t have to provide a style container with your answer, but you should assume that the following style container appears at the top of your quadratic equation web page. It causes the entire web page to use monospace font.

```html
<style>
body {font-family: monospace;}
</style>
```
#### 10.2 To further the goal of describing your web page’s content, you must surround each variable (x, a, b, and c) individually with proper tags.

#### 10.3 Insert single spaces on each side of the equals sign, at the left of the ± symbol, on each side of the minus sign, and on each side of the / sign. Do not insert spaces elsewhere. You don’t need to worry about the equation being too long to fit on one line and exhibiting line wrap. That means you don’t need to use `&nbsp;` character references. In the equation, note how ½ is one character, with the 1 on top of the /, not at the left.

```html
<span id="equation" style="font-family: monospace;">
  <var>x</var> = (-<var>b</var> &plusmn;(<var>b</var><sup>2</sup> - 4<var>a</var><var>c</var>)<sup>&frac12;</sup>) / 2<var>a</var>
</span>
```

> Written with [StackEdit](https://stackedit.io/).
