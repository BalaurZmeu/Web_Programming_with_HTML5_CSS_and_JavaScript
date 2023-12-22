# Chapter 3 Review Questions

### 1. What is the universal selector’s syntax, and which elements does it match?

The universal selector in CSS is represented by the `*` symbol. It matches every element in a web page. The asterisk is a wildcard. In general, a wildcard is something that matches every item in a collection of things. Here’s an example universal selector CSS rule that centers the text for every text-oriented element in the web page:

```css
* {text-align: center;}
```

Even though the rule matches every element, because the property (text-align) deals with text, the rule affects only the elements that contain text.

### 2. If you specify an element at the left of a selector, that selector is referred to as which type of selector? Here’s an example:

```css
blockquote {color: red;}
```

When you use an element type (e.g., `hr` or `blockquote`) to match all instances of that element type and then apply specified formatting features to those instances, it is called a type selector. For example, the following CSS rule uses a type selector with the `hr` element type and applies a width of 50% to all the `hr` elements in the current web page:

```css
hr {width: 50%;}
```

### 3. In a CSS rule, you should always include a semicolon after every property-value pair, even the last property-value pair. True or false.

The W3C CSS standard allows you to omit the semicolon after the last property-value pair. However, coding conventions suggest that you should not omit the last semicolon—you should include it. That way, if another property-value pair is added later on, there will be less likelihood of accidentally forgetting to add a semicolon in front of the new property-value pair.

### 4. Why are selectors that use the dot syntax (e.g., `.in-your-face`) referred to as “class selectors”?

The dot with the name following it (`.in-your-face` in this example) is called a class selector because its purpose is to select elements that have a particular value for their `class` attribute. So the class selector rule would select/match the following element because it has a `class` attribute with a value of `in-your-face`:

```css
.in-your-face {background-color: lightgray;}
```

```html
<q class="in-your-face">It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.</q>
```

### 5. What is the symbol used to preface an ID selector?

The `#` symbol. The syntax is the same as for a class selector rule, described above, except that you use a pound sign (`#`) instead of a dot (`.`), and you use an id attribute value instead of a class attribute value. While class selector usually selects multiple elements that belong to a specified class, the id selector targets  one element with a unique id.

```css
#in-your-face {background-color: silver;}
```

```html
<q id="in-your-face">It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.</q>
```

### 6. What does “cascading” mean in the term “Cascading Style Sheets”?

In the term "Cascading Style Sheets" (CSS), "cascading" refers to the hierarchy and priority system that determines how styles are applied to HTML elements. The cascade in CSS involves the process of combining styles from different sources, such as user styles, author styles, and browser defaults. Styles can cascade or override each other based on their specificity, importance, and order of application, allowing for a flexible and structured approach to defining the visual presentation of web content. The general rule is: "The more local CSS rules override the more general ones." Here's the hierarchy of places where CSS rules can be defined, highest to lowest priority:
1. In an element’s style attribute.
2. In a style element in the web page’s head section.
3. In an external file.
4. In the settings defined by a user for a particular browser installation.
5. In the browser’s native default settings.

### 7. What is a global attribute?

Global attributes are attributes common to all HTML elements; they can be used on all elements, though they may have no effect on some elements. Some examples of global attributes are: `lang`, `style`, `class`, and `id`.

### 8. What is the syntax for the element that links a web page to an external CSS file?

```html
<link rel="stylesheet" href="name-of-external-css-file">
```

### 9. If you use an RGB value with integers, what is the valid range for each integer?

If you use an RGB value with integers, then each integer value must be between 0 and 255, with 0 providing the least intensity and 255 providing the most. Here are two class selector rules that use RGB values with integers:

```html
<style>
.favorite1 {color: rgb(144,238,144);}
.favorite2 {color: rgb(127,127,127);}
</style>
```

### 10. If you apply the property-value pair `opacity: .5;` to a word, what happens?

The opacity value must be in the form of a decimal number between 0 and 1, with 0 being completely transparent, 1 being completely opaque, and .5 in between.

```css
.yellow-bg2 {background-color: rgba(255,255,0); opacity: .5;}
```

### 11. What does HSL stand for?

HSL stands for hue, saturation, and lightness. 
1. Hue is a degree on the color wheel which go from 0 to 360 degrees. So, 0 degrees is for red, 120 degrees is for green, and 240 degrees is for blue. 
2. The second value in the `hsl` construct is the color’s percentage of saturation. The W3C says 0% means a shade of gray, and 100% is the full color.
3.  The third value in the `hsl` construct is the color’s percentage of lightness. A lightness value of 0% generates black, regardless of the values for hue and saturation. A lightness value of 100% generates white, regardless of the values for hue and saturation. A lightness value of 50% generates a “normal” color.

```css
p {background-color: hsl(120,50%,75%);}
```

### 12. What is the CSS property-value pair that causes lowercase letters to be displayed with smaller-font uppercase letters?

The CSS property `font-variant` with the value `small-caps` displays lowercase letters with smaller-font uppercase letters.

```css
.title {font-variant: small-caps;}
```

### 13. For the `font-family` property, why is it good to have a list of values rather than only one value?

With the font-family property, you should normally have a comma-separated list of fonts, not just one font. The browser works its way through the font-family list from left to right, and uses the first font value it finds installed on the browser’s computer and skips the other fonts. Whenever you use a font-family CSS rule, you should include a generic font like `serif`, `sans-serif`, or `monospace`at the end of the rule’s list of font names. 

### 14. What is the CSS property-value pair that causes underlining to take place?

The CSS property `text-decoration` with the value `underline` draws a line below the text.

```css
.underlined {text-decoration: underline;}
```

### 15. If you use the `border-width` property, what other property should you use in conjunction with it?

If you ever use the `border-width` property, remember to use it in conjunction with the `border-style` property. If you forget to provide a `border-style` property, then the default `border-style` value kicks in, which is `none`. With a `border-style` value of `none`, no border will be displayed. Forgetting the `border-style` property is a very common bug.

```css
.boxed {
border-style: solid;
border-width: 4px;
}
```

### 16. The `border` shorthand property can be used to specify which border attributes?

The `border` property is a shorthand notation for specifying a border’s width, style, and color in that order.
Here are two examples:

```css
.understated-box {border: thin dotted blue;}
.in-your-face-box {border: 10px solid;}
```

In the second example, there isn’t a color value. You can omit the width and/or color values, but if you omit the style value, then there will be no visible border.

### 17. What does the `border-radius` property do?

The `border-radius` property allows you to specify how much curvature you want at each of the four corners of an element. The default is to have no curvature. Here are two examples:

```css
.rounded-edges {border-radius: 30px;}
.diagonal-box {border-radius: 25% 10%;}
```

> Written with [StackEdit](https://stackedit.io/).
