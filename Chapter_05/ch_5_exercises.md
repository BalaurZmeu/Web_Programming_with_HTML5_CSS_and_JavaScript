# Chapter 5 Exercises

### 1. Suppose you have a table implemented with a `table` element, and borders are displayed around each table cell and around the table’s perimeter. Provide a CSS type selector rule that eliminates the gaps between each of the adjacent borders.

```css
table, th, td {border-collapse: collapse;}
```

### 2. There are quite a few syntax details in HTML5 and in CSS. This book covers a lot of those details, but certainly not all of them. One thing we skipped in this chapter is the `colgroup` element, which is used in conjunction with the `table` element. For this exercise, you’ll need to learn about the `colgroup` element by looking it up on the W3C’s website.

#### Given this code:
```html
<style>
table {border-collapse: collapse;}
th, td {
padding: .5em;
text-align: center;
vertical-align: bottom;
}
th {background: lightskyblue;}
</style>
</head>
<body>
<table>
<caption>Bank Accounts</caption>
<tr>
<th>Account<br></th>
<th>Starting<br>Balance</th>
<th>Expenditures</th>
<th>Remaining</th>
</tr>
<tr>
<td>324014</td>
<td>$2,990.55</td>
<td>$550.55</td>
<td>$2,440.00</td>
</tr>
<tr>
<td>361102</td>
<td>$4,075.00</td>
<td>$0.00</td>
<td>$4,075.00</td>
</tr>
</table>
</body>
```
#### What `colgroup` element code and CSS code need to be added to this code in order to produce the following web page? As its name implies, the purpose of the `colgroup` element is to group together a set of columns. In this case, you must provide three `colgroup` elements—one for the first column, one for the second and third columns combined, and one for the fourth column. In your answer, you must make it clear where your added code should be inserted in the code.

The `<colgroup>` tag is useful for applying styles to entire columns, instead of repeating the styles for each cell, for each row. The `<colgroup>` tag must be a child of a `<table>` element, after any `<caption>` elements and before any `<thead>`, `<tbody>`, `<tfoot>`, and `<tr>` elements. To define different properties to a column within a `<colgroup>`, one should use the `<col>` tag within the `<colgroup>` tag.

```html
<style>
...
table {
border: 1px solid black;
border-collapse: collapse;
}
</style>
...
<table>
<caption>Bank Accounts</caption>
<colgroup>
<col style="border: 1px solid black">
<col span="2" style="border-style: none">
<col style="border: 1px solid black">
</colgroup>
<tr>
<th>Account<br></th>
<th>Starting<br>Balance</th>
<th>Expenditures</th>
<th>Remaining</th>
</tr>
...
```

### 3. What is the purpose of a pseudo-class?

According to the Mozilla CSS reference a CSS ***pseudo-class*** is a keyword added to a selector that specifies a special state of the selected element(s). For example, the pseudo-class `:hover` can be used to select a button when a user's pointer hovers over the button and this selected button can then be styled.

```css
button:hover {color: blue;}
```

### 4. Describe the effect of this CSS rule:

```css
tr:nth-of-type(odd) {color: red;}
```

The CSS rule above selects every odd table row in a table and changes the color of the text in all elements in a row to red.

### 5. Refer to the Global Temperatures source code in Figure 5.8. Provide a modified table that uses two `tbody` elements - one for the two most recent years (2015 and 2016) and one for the earlier years. Assign `"recentYears"` to the `class` attribute of the `tbody` containing the two most recent years. Provide a CSS rule for the recent-years data cells that changes the text from black to red. Hint: Use a class selector in conjunction with a descendant selector.

```html
<style>
...
.recentYears td {color: red;}
</style>
...
<table>
<caption>Average Annual Global Temperatures</caption>
<thead>
<tr>
<th>Year</th>
<th>Temp<br>Rank</th>
<th>Avg<br>Temp (&deg;F)</th>
</tr>
</thead>
<tbody class="recentYears">
<tr><th>2016</th><td>1</td><td>58.98</td></tr>
<tr><th>2015</th><td>2</td><td>58.77</td></tr>
</tbody>
<tbody>
<tr><th>2014</th><td>3</td><td>58.53</td></tr>
<tr><th>2013</th><td>5</td><td>58.37</td></tr>
<tr><th>2012</th><td>9</td><td>58.33</td></tr>
</tbody>
</table>
</body>
</html>
```

### 6. Refer to the My Favorite Eras source code in Figure 5.10. Provide a modified table that is more accessible. Specifically, add an `id` attribute value to the `th` element at the head of each column and each row. Also, add a `headers` attribute to the Mesozoic and Cenozoic `th` elements and to every `td` element.

```html
<table>
<caption>My Favorite Eras</caption>
<thead>
<tr>
<th id="eras">Eras</th>
<th id="events" colspan="2">Events</th>
</tr>
</thead>
<tbody>
<tr>
<th id="mezo" rowspan="2" headers="eras">Mesozoic<br>251 to 65.5 mya</th>
<td headers="events mezo">Evolutionary split between reptiles and dinosaurs</td>
<td headers="events mezo">235 mya</td>
</tr>
<tr>
<td headers="events mezo">South America breaks away from Africa</td>
<td headers="events mezo">105 mya</td>
</tr>
<tr>
<th id="ceno" rowspan="3" headers="eras">Cenozoic<br>65.5 mya to today</th>
<td headers="events ceno">Modern mammals appear</td>
<td headers="events ceno">40 mya</td>
</tr>
<tr>
<td headers="events ceno">Tool-making humanoids appear</td>
<td headers="events ceno">2 mya</td></tr>
<tr>
<td headers="events ceno">First Rolling Stones reunion tour</td>
<td headers="events ceno">11,000 years ago</td>
</tr>
</tbody>
</table>
```

### 7. A table is embedded inside one cell of a larger structure formed using `display: table`, `display: table-row`, and `display: table-cell`. The embedded table is the middle cell in the three bordered cells. This exercise also provides practice using structural pseudo-class selectors. The selectors apply gold background to the days on the calendar during which NCAA basketball tournament games are played. Your display will look like the screenshot, except for the calendar dates. Use the current year, which means March dates will probably fall on different days of the week. Also, the cell on the right should contain material related to your favorite team. Provide complete source code for the March Madness web page. The following template provides most of the code, so use it as a starting point. In the left section, you’ll need to add “MARCH MADNESS.” In the middle section, you’ll need to provide content for the calendar by adding March, Sun, Mon, …, 1, 2, etc. In the right section, you’ll need to replace “Jayhawks” and the fight song with text for your favorite team. In the structural pseudo-class CSS rule, you’ll need to provide appropriate values in the selectors’ parentheses. Figuring out those values is a bit tricky. Here’s a hint: To do something to a particular row and all subsequent rows or a particular cell within a row and all subsequent cells, use the formula, 1n+#, where # is the starting row number or starting cell number.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="author" content="John Dean">
<title>March Madness</title>
<style>
html {display: flex; justify-content: center;}
body {display: table;}
.row {display: table-row;}
.cell {
display: table-cell;
border: thin solid;
text-align: center;
vertical-align: middle;
}
.end {width: 200px; padding: 10px;}
th {width: 40px;}
tr:nth-of-type() td:nth-of-type(), tr:nth-of-type() {
background-color: gold;
}
</style>
</head>
<body>
<div class="row">
<div class="end cell">
<h1></h1>
</div>
<table class="cell">
<caption><h3></h3></caption>
<tr>
<th></th><th></th><th></th><th></th><th></th><th></th><th></th>
</tr>
<tr>
<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
</tr>
<tr>
<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
</tr>
</table>
<article class="end cell">
<h3></h3>
</article>
</div>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="author" content="John Dean">
<title>March Madness</title>
<style>
html {display: flex; justify-content: center;}
body {display: table;}
.row {display: table-row;}
.cell {
display: table-cell;
border: thin solid;
text-align: center;
vertical-align: middle;
}
.end {width: 260px; padding: 10px;}
th {width: 50px;}
tr:nth-of-type(5) td:nth-of-type(n+3), tr:nth-of-type(n+6){
background-color: gold;
}
</style>
</head>
<body>
<div class="row">
<div class="end cell">
<h1>MARCH MADNESS</h1>
</div>
<table class="cell">
<caption><h3>March</h3></caption>
<tr>
<th>Sun</th><th>Mon</th><th>Tues</th><th>Wed</th><th>Thur</th><th>Fri</th><th>Sat</th>
</tr>
<tr>
<td></td><td></td><td></td><td></td><td></td><td>1</td><td>2</td>
</tr>
<tr>
<td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td>
</tr>
<tr>
<td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td>
</tr>
<tr>
<td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td>
</tr>
<tr>
<td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td>
</tr>
<tr>
<td>31</td><td></td><td></td><td></td><td></td><td></td><td></td>
</tr>
</table>
<article class="end cell">
<h3>The Jayhawks</h3>
<p>
Hail to thee, our Alma Mater<br>
Towering toward the blue.<br>
Lift the banner ever skyward,<br>
Hail to old KU
</p>
</article>
</div>
</body>
</html>
```
Here's a link: [March Madness](Code_Examples/march_madness.html)

### 8. Given this `img` element:

```html
<img class="cow-picture" src="cowInPond.jpg" alt="cow in pond" width="200" height="145">
```

### Provide a CSS rule that uses absolute positioning to position the image in the top-right corner of the image’s surrounding container, 10 pixels from the top edge and 10 pixels from the right edge.

```css
img.cow-picture {
  position: absolute;
  top: 10px;
  right: 10px;
}
```

> Written with [StackEdit](https://stackedit.io/).
