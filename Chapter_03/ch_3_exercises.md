# Chapter 3 Exercises

### 1. Suppose you have two CSS selectors — one named `scary-font` and one named `boxed`. If you want to apply both selectors to one class attribute, which of the following will you use?**

#### a) `class = "scary-font boxed"`
#### b) `class = "scary-font, boxed"`
#### c) Nothing (it’s impossible to apply two selectors to one class attribute)

The answer is **a**. That means that both sets of CSS rules for `scary-font` and `boxed` get applied to the element’s content. Note that the two class selectors are separated with spaces. The delimiter spaces are required whenever you have multiple class selectors for one class attribute.

### 2. What is special about the `span` element that makes it a good candidate for using CSS?

If you want to apply CSS to text that doesn’t coincide with any of the HTML5 elements, and you want the affected text embedded within surrounding text, put the text in a `span`. The `<span>` HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as `lang`.

### 3. For an RGB color value, each of the three colors uses 8 bits. RGB values can be used to represent approximately 16 million different colors. Provide the math that explains why RGB values can be used to represent approximately 16 million different colors.

RGB values use 8 bits for each color channel (Red, Green, Blue). Therefore, each color channel can have 2<sup>8</sup> (2 raised to the power of 8) different values, ranging from 0 to 255. Since there are three color channels (RGB), the total number of unique combinations is calculated by multiplying the number of possibilities for each channel: (2<sup>8</sup> * 2<sup>8</sup> * 2<sup>8</sup>). This equals (256 * 256 * 256\), which is 16,777,216. Therefore, RGB values can represent approximately 16 million different colors.

### 4. Provide a class selector rule that specifies the foreground and background colors shown in the following “Feliz Navidad!” text. For the foreground color, use an HSLA value with 80% opacity. For the background color, use an HSL value. For your class selector, use christmas as the class attribute value.


```html
<style>
.christmas {
color: hsla(120, 100%, 50%,.8);
background-color: hsl(351, 100%, 86%);
}
</style>
...
<body>
<p class="christmas">
Feliz Navidad!
</p>
</body>
```

### 5. What’s wrong with the following rule?

```css
h1 {font-family: Helvetica;}
```

With the font-family property, you should normally have a comma-separated list of fonts, not just one font. The browser works its way through the font-family list from left to right, and uses the first font value it finds installed on the browser’s computer and skips the other fonts. Whenever you use a font-family CSS rule, you should include a generic font like `serif`, `sans-serif`, or `monospace`at the end of the rule’s list of font names. Here is an example:

```css
h1 {font-family: Courier, Prestige, monospace;}
```

### 6. Specify a class selector rule that attempts to use a font named Cracked. If that font is unavailable, then the rule attempts to use a font named Comic Sans MS. Your rule should handle the possibility that neither font is available. For your class selector, use `fun-font` as the class attribute value. Make sure you choose a generic font that is appropriate for Cracked and Comic Sans MS.

```css
.fun-font {font-family: Cracked, "Comic Sans MS", sans-serif;}
```

### 7. What does the book’s HTML coding conventions appendix say about specifying zero values for CSS properties? Provide the general rule and also the rule for color values.

Google’s Style Guide says if you have a zero value for a CSS property, you should omit the unit in order to make the code more compact. You should follow that rule with one exception. The CSS validation service confirms that for color percentage values, you must include the % unit even when the value is 0%.

```css
.narrow-tall-container {margin: 50px 0;}
```

```css
.red-colored {background-color: rgb(70%, 0%, 10%);}
```

### 8. What’s wrong with the following rule?

```css
p {margin: 2 px;}
```

The W3C's specification says: "The format of a length value is a number (with or without a decimal point) ***immediately followed*** by a unit identifier (e.g., px, em, etc.). After a zero length, the unit identifier is optional." So, the rule above contains a syntactical error. Here's the corrected version:

```css
p {margin: 2px;}
```

> Written with [StackEdit](https://stackedit.io/).
