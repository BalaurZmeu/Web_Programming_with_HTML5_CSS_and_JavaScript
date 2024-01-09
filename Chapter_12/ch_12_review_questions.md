# Chapter 12 Review Questions

### 1. For applets, Flash, and canvas, is each one built into modern browsers?

Applets and Flash are not built into modern browsers. Only canvas is built into modern browsers.

### 2. What is method call chaining?

Method call chaining is a programming technique where multiple methods are called sequentially on the same object. Each method in the chain returns an object, and the next method is called on that returned object. This allows for concise and readable code. For example:

```javascript
const name = "John Doe".charAt(0).toLowerCase();
// Assigns "j" to the constant name
```

### 3. Does a color gradient apply to one specified shape or to all of the shapes drawn with the context object?

Color gradients in JavaScript are applied globally and affect all shapes drawn with the context object unless you reset or change the gradient settings.

### 4. If you want to display characters in a normal fashion (as you see them in this sentence), should you use `strokeText` or `fillText`?

When aiming to display text in a normal fashion, the `fillText` method should be used in JavaScript, as it fills the characters with color. On the other hand, `strokeText` only draws the outer lines of characters.

### 5. What context object property should you use to specify font size for a text string?

To specify the font size for a text string in the context object, you should use the `font` property.

### 6. If you use the context object’s `font` property, what granular font values are you required to provide?

When using the `font` property of the context object in JavaScript, you are required to provide the font size, font family, and style. For example: `"12px Arial"` specifies a font size of 12 pixels, Arial font family, and the default style.

### 7. What context object property is for specifying horizontal alignment for text?

The context object property for specifying horizontal alignment for text in JavaScript is `textAlign`.

### 8. What kind of arc is created if you call the `arc` method with starting and ending angle values of 0 and 3π?

If you call the arc method with starting and ending angle values of 0 and 3π (3 times the mathematical constant π, or approximately 9.42 radians), it would create a full circle. To create a full circle using the arc method, it is enough to call it with starting angle 0 and ending angle 2π (two times the mathematical constant π, or approximately 6.28 radians).

### 9. What kind of arc is created if you call the `arc` method with starting and ending angle values of 0 and 0?

If you call the `arc` method with starting and ending angle values of 0 and 0, that creates no arc at all.

### 10. What happens if you call the `fill` method for an arc whose ends are not closed?

If the ends of the arc are not closed the `fill` method connects the arc’s end points with an invisible straight line and fills the interior.

### 11. What does the `moveTo` method do?

The `moveTo` method in JavaScript is used to move the current drawing point to a specified position without drawing anything. It sets the starting point for the next path segment.

### 12. What are the two methods that establish the start of a subpath?

There are two methods that establish the start of a subpath in the canvas:

1. `beginPath()`: This method begins a new path or resets the current path, effectively starting a new subpath.

2. `moveTo(x, y)`: This method moves the current drawing point to the specified coordinates (x, y) without drawing anything, establishing the start of a new subpath.

### 13. What method should you call to draw a line that connects the end of the most recently drawn line segment or arc to the start of the current subpath?

To draw a line that connects the end of the most recently drawn line segment or arc to the start of the current subpath, you should call the `closePath` method.

### 14. If you want to change the line properties for a drawing, you need to split the path into multiple paths. True or false.

True. For example if you assign "red" to `strokeStyle` at the beginning of a path and reassign it to "blue" later in the same path, when you call `stroke` at the end of the path, the JavaScript engine uses the current color value (blue) to draw the entire path. Likewise, if you assign a value to `lineWidth` at the beginning of a path and assign a larger value to `lineWidth` later in the same path, when you call `stroke` at the end of the path, the JavaScript engine uses the current larger width to draw the entire path. So if you want to change the line properties for a drawing, you need to split the path into multiple paths.

### 15. It is legal to use straight lines and curved lines together in a single path. True or false.

True. It is legal to draw with a single path that uses both straight lines and a curved lines.

### 16. For shape positions and shape dimensions, what are two benefits of using named constants?

Using named constants instead of hardcoded constants means that the code is easier to understand. In particular, using named constants for shape positions and shape dimensions makes your web page drawings scalable. If you want to change a shape’s position or size, it’s easy. You do it in one place, using the named constants at the top of the canvas code.

### 17. What happens when you call the `translate` function?

#### a) The coordinate system’s origin moves.

#### b) The drawn shapes move.

#### c) The JavaScript engine draws the current shape.

The answer is **a**. The `translate` method moves the origin and the coordinate system **x** pixels to the right and **y** pixels down.

### 18. Typically, when clearing the canvas drawing area, what two functions should you call before calling `clearRect`? Explain the purpose of each of those function calls.

Deleting old graphics objects requires quite a bit of ef­fort. The easiest way to do it is to call the context object’s `save`, `setTransform`, `clearRect`, and `restore` methods to clear the entire canvas drawing area before redrawing all the ­graph­ics objects. The `save` method saves the context object’s current drawing state, which includes things like `lineWidth`, `strokeStyle`, the coordinate system’s origin location, and the coordinate system’s rotation. The `setTransform` (or `resetTransform`) wipes out the coordinate system’s current position. The `clearRect` method clears everything within a specified rectangular area. “Clearing” means that the rectangular area returns to the canvas element’s background color, which is white by default. The `restore` method restores the context object’s drawing state to a state saved by a `save` method call.

### 19. When you want to rotate something, why is it common to call `translate` before calling `rotate`?

When rotating objects in JavaScript's canvas context, it's common to use `translate` before `rotate` for precise control over the rotation's center point. By default the graphics system rotates objects around the origin (0, 0) of the coordinate system. By calling `translate` first, you effectively move the origin to the desired center point for rotation. The `rotate` method then pivots the object around this newly positioned origin, ensuring it spins around its intended center.

### 20. What are two benefits of using helper functions?

Two benefits of using helper functions are:

1. **Code Reusability:** Helper functions encapsulate specific pieces of functionality, making it easier to reuse the code in different parts of your program. This promotes a more modular and maintainable code structure.

2. **Readability and Abstraction:** Helper functions allow you to abstract away complex operations or frequently used code into a named function. This enhances the readability of your main code by providing descriptive function names and hiding implementation details.

> Written with [StackEdit](https://stackedit.io/).
