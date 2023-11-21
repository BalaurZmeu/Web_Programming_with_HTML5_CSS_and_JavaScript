# Chapter 7 Exercises

**1. Provide an `img` element and an associated CSS rule (two separate things) that could be used to render the following sun image. Do not use a style attribute. Your code should cause surrounding text to flow down on the right of the sun image. You’re welcome to create an entire web page for testing purposes, but the only thing you’re required to submit is the image tag and the CSS rule. If you want to create an entire web page, you’ll need to find an actual sun-image file. Otherwise, feel free to dream up a sun-image filename and appropriate size values. You should assume that the image file is stored in the same directory as the web page.**

**My answer:**
```html
<style>
  .sun {float: left;}
</style>
</head>
<body>
  <p>
    <img class="sun" src="sun.gif" width="40" height="40">
    Welcome to sunny San Diego...
```

**2. Suppose you have an `a` element and an `iframe` element, and you want the `a` element’s `href` value to load within the `iframe` element. How can you make that happen? In your answer, you must mention the attributes in the `a` and `iframe` elements that are used to tie the two elements together.**

**My answer:** The `target` attribute of the `<a>` element should coincide with the `name` attribute of the `<iframe>` element.
```html
<a href="big_image.jpg" target="full-size-iframe"><img src="thumbnail.jpg"></a>
<iframe name="full-size-iframe"> ...
```

**3. Given an `img` element with `class="block-image"`. Provide a CSS rule that causes the image to display using block formatting.**

**My answer:**
```css
.block-image {display: block;}
```

**4. Implement a CSS image sprite that toggles between a stationary cartoon animal (a kangaroo?) and that same animal jumping. The toggling occurs when the mouse moves over the image and when the mouse moves away.**

**My answer:**
```html
<style>
#sprite {
width: 100px;
height: 100px;
background-image: url(kangaroo_sprite.png);
background-position: 0 0;
}
#sprite:hover {background-position: -101px 0;}
</style>
</head>
<body>
<div id="sprite">
</div>
</body>
```

**5. Given this body element start tag:**
```html
<body class="honey-bunny">
```
**Provide a class selector rule that uses scaling to cover the web page completely with an image file named `goldenLagomorph.jpg`. Your code should position the background image with its top-left corner in the top-left corner of the browser window’s viewport. Assume the web page and the image file are stored in the same directory.**

**My answer:**
```css
body.honey-bunny {
  background-image: url(goldenLagomorph.jpg);
  background-size: cover;
  background-position: top left;
  background-attachment: fixed;
  }

```

**6. Provide a `background-image` property-value pair that could be used
to generate this radial gradient background:**

**My answer:**
```css
background-image: repeating-radial-gradient(circle, purple, blue 5%, purple 10% );
```
Here's the [link to the actual page](Code_Examples/exercise_6.html)

> Written with [StackEdit](https://stackedit.io/).
