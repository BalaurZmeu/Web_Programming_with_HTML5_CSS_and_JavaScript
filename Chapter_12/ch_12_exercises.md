# Chapter 12 Exercises

### 1. In the Rectangles web page, suppose you want to add a 1-pixel-width black dashed border to the second rectangle that shows where the rectangle’s fill border would be if there were no `strokeRect` method call. In other words, you want to display the border shown here. The following code fragment does much of the work. What single line of code should you insert above the code fragment? Hint: Look up the `setLineDash` method on the Internet and use it.

```javascript
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.strokeRect(140, 80, 70, 140);
```
The line we should insert above is:

```javascript
ctx.setLineDash([10, 10]);
```

### 2. If you want to display text with a border and a filled interior, why should you normally call `strokeText` after `fillText`?

The `strokeText` method draws a border of specified width around the characters. If the width of the border is greater than 1px, half of it goes on the outside of the character and half of it goes on the inside. By calling `strokeText` last, it draws on top of the character’s fill color, so the border lines of the `strokeText` method are displayed with their full widths. On the other hand, if you call `fillText` after `strokeText`, the inner half of the border lines gets overlaid by the fill color.

### 3. Assume you’ve got a `canvas` variable that holds the web page’s canvas object and a `ctx` variable that holds the web page’s context object. Given this code:

```javascript
ctx.font = "100px Arial, sans-serif";
ctx.fillText("Bullseye", canvas.width / 2, canvas.height / 2);
```
#### What code would you need to insert above the given code in order to center the “Bullseye” string horizontally and vertically?

 To center the "Bullseye" string horizontally and vertically we should insert the following code above the previous fragment:

```javascript
ctx.textAlign = "center";
```

### 4. Provide a JavaScript function that generates the Text Baseline Examples web page shown in Figure 12.5. For the font size, use 25 pixels. For the horizontal lines’ color, use `springgreen`. For the horizontal lines’ positions, use `y` values of 40, 80, 120, and 160. You may use one path or multiple paths for the four lines. Your code should be efficient  - do not draw something and then redraw it later.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="author" content="Balaur Zmeu">
<title>Text Baseline Examples</title>
<script>
function displayExamples() {
  var ctx;
  ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "25px serif";
  ctx.strokeStyle = "springgreen";
  ctx.lineWidth = 2;
  yValues = [40, 80, 120, 160];
  lineValues = ["alphabetic", "bottom", "middle", "top"];
  var y;
  
  for (let i=0; i<4; i++) {
    ctx.textBaseline = lineValues[i];
    ctx.beginPath();
    y = yValues[i];
    ctx.moveTo(0, y);
    ctx.lineTo(650, y);
    ctx.stroke();
    ctx.fillText("For this text, textBaseline=\"" +
      lineValues[i] + "\" & y=" + y + ".", 10, y);
  } // end for loop
} // end displayExamples
</script>
</head>

<body onload="displayExamples();">
<canvas id="canvas" width="700" height="210">
</canvas>
</body>
</html>
```

[Here's the link to the HTML file](Code_Examples/exercise_4_text_baseline_examples.html)

### 5.  Implement a function that draws five filled-in circles in a horizontal row. To avoid code redundancy, you must use a loop.

```javascript
function drawCircles() {
  var ctx;
  var x = 80;
  var y = 35;
  var radius = 25;
  ctx = document.getElementById("canvas").getContext("2d");
  ctx.strokeStyle = "darkviolet";
  ctx.fillStyle = "lavender";
  ctx.lineWidth = 4;
  
  for (let i=0; i<5; i++) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    x += 3 * radius;
  } // end for loop
} // end drawCircles
```

[Here's the link to the HTML file](Code_Examples/exercise_5_circles.html)

### 6. Add code to the Umbrella web page’s draw function in order to display a right-side curved handle. Do not change the existing code. Show where your added code gets positioned within the existing code. Hint: All you need to do is add one statement.

```javascript
// before calling the stroke() method that draws the stick
    ...
    ctx.arc(110, 120, 10, Math.PI, 0, counterclockwise = true);
    ctx.stroke();
    ...
```

[Here's the link to the HTML file](Code_Examples/exercise_6_modified_umbrella.html)

### 7. The context object’s `rect` method creates a rectangle using the same four parameters as `strokeRect` - x, y, width, and height. The difference is that the `rect` method just creates the rectangle, but does not draw it. To draw it, you need to call `stroke` and/or `fill`. As with the `lineTo` and `arc` methods, if you call `rect` as part of a path, to avoid connecting the path’s previous shape to the rectangle, you should call `moveTo` before calling `rect`. Rewrite the Face Web page’s initialize function so that it uses the `rect` method instead of the `strokeRect` method. You are required to use only one path for the entire web page.

```javascript
function initialize() {
  // x and y coordinates for the face's center point
  const CENTER_X = 250;
  const CENTER_Y = 250;
  const RADIUS = 150;
  const TITLE_BASELINE = 75;
  const EYE_WIDTH = 8;
  const EYE_HEIGHT = 6;
  
  var ctx; // the canvas object's context
  
  ctx = document.getElementById("canvas").getContext("2d");
  ctx.fillStyle = "blue";
  ctx.textAlign = "center";
  ctx.font = "75px Arial, sans-serif";
  ctx.fillText("Hello", CENTER_X, TITLE_BASELINE);
  
  ctx.strokeStyle = "orange";
  ctx.fillStyle = "yellow";
  ctx.lineWidth = 4;
  
  // draw circle
  ctx.beginPath(); // beginning the path
  ctx.arc(CENTER_X, CENTER_Y, RADIUS, 0, 2 * Math.PI);
  ctx.fill();
  // calling moveTo before calling rect to draw eyes 
  ctx.moveTo(CENTER_X - RADIUS / 3, CENTER_Y - RADIUS / 3);
  ctx.rect(CENTER_X - RADIUS / 3, CENTER_Y - RADIUS / 3,
    EYE_WIDTH, EYE_HEIGHT);
  ctx.moveTo(CENTER_X + RADIUS / 3, CENTER_Y - RADIUS / 3);
  ctx.rect(CENTER_X + RADIUS / 3, CENTER_Y - RADIUS / 3,
    EYE_WIDTH, EYE_HEIGHT);
  // draw mouth
  ctx.moveTo(CENTER_X - RADIUS / 3, CENTER_Y + RADIUS / 3);
  ctx.lineTo(CENTER_X + RADIUS / 3, CENTER_Y + RADIUS / 3);
  ctx.stroke(); // closing the path
} // end initialize
```
[Here's the link to the HTML and JavaScript files](Code_Examples/exercise_7_modified_face)

### 8. Add "Expand" and "Shrink" buttons to the Moving Face web page. Your "Expand" button should expand the face by the same amount as the "Shrink" button shrinks it. So if you expand x times, then shrink x times, you should see the same face as you started with. Feel free to use the `expand` function shown in Figure 12.17, but in your solution, you must improve the style. In particular, you must use named constants for the scale factors and inverse scale factors. There’s no need to submit code for the entire web page. Just submit code for the expand and shrink button elements and code for the expand and shrink event-handler functions.

```javascript
// the named variables RADIUS, EYE_WIDTH, and EYE_HEIGHT
// should be var (variables) not const (constants)
var RADIUS = 150;
var EYE_WIDTH = 8;
var EYE_HEIGHT = 6;

// This function makes the face 1.5 times bigger
function expand() {
  RADIUS *= 1.5;
  EYE_WIDTH *= 1.5;
  EYE_HEIGHT *= 1.5;
  drawFace();
} // end expand

// This function makes the face 1.5 times smaller
function shrink() {
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0); // original coordinate system
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
  
  drawHeading();
  RADIUS /= 1.5;
  EYE_WIDTH /= 1.5;
  EYE_HEIGHT /= 1.5;
  drawFace();
} // end shrink
```

```html
<!-- Added two buttons -->
<br><br>
<input type="button" value="Expand"
  onclick="expand();">
<input type="button" value="Shrink"
  onclick="shrink();">
</body>
```

[Here's a link to the HTML and JavaScript files](Code_Examples/exercise_8_moving_face)

### 9. In the Moving Face web page, the `moveUp` function calls the `clearRect` method like this:

```javascript
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

#### In the web page’s `body` container, you can see that the `canvas` element has `width` and `height` attributes of 500 and 400 pixels, respectively. So in the `clearRect` method call, we could have used 500 and 400 instead of `canvas.width` and `canvas.height`. Which technique is better and why?

The technique that is using `canvas.width` and `canvas.height` is generally preferred. If the canvas dimensions change (e.g., through user resizing or JavaScript modifications), using `canvas.width` and `canvas.height` ensures `clearRect` always clears the entire canvas, regardless of its current size. It is also good in the long run for code maintainability because by referencing the canvas's properties, you maintain a single source of truth for its dimensions.

> Written with [StackEdit](https://stackedit.io/).
