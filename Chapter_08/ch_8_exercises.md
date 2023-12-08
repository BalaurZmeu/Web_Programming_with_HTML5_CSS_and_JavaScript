# Chapter 8 Exercises

**1. Why is it appropriate to terminate every statement with a semicolon, even the last one in a function? Provide two reasons.**

**My answer:** Coding conventions dictate that you should terminate every statement with a semicolon, even the last one. If there’s no semicolon at the end of the last statement and someone later adds a new statement after the last statement, there will be no semicolon between the two statements, and that creates a bug. Another reason to insert a semicolon after the last statement is that if you don’t do it, the JavaScript engine does it for you behind the scenes, and that slows things down slightly.

**2. For each of the following variable names, indicate (with Y or N) whether it’s legal and whether it uses proper style. Note: You may skip the style question for illegal variable names because style is irrelevant in that case.**

**My answer:**
<table>
<tr>
<th></th><th></th><th>legal (Y/N)?</th><th>proper style (Y/N)?</th>
</tr>
<tr>
<th>a)</th><th>_totalPages</th><td>Yes</td><td>No</td>
</tr>
<tr>
<th>b)</th><th>2ndTeam</th><td>No</td><td></td>
</tr>
<tr>
<th>c)</th><th>car Color</th><td>No</td><td></td>
</tr>
<tr>
<th>d)</th><th>weight#of#specimen</th><td>No</td><td></td>
</tr>
<tr>
<th>e)</th><th>seatNumber</th><td>Yes</td><td>Yes</td>
</tr>
<tr>
<th>f)</th><th>BookCost$</th><td>Yes</td><td>No</td>
</tr>
</table>

**3. Find a website, or just imagine a website, where users are able to make reservations at restaurants. Should such a website be implemented with client-side technology or server-side technology? Provide at least two reasons that justify your answer.**

**My answer:** I believe that a website, where users make reservations at restaurants, should be implemented with server-side technology and the data of the reservations should be stored on the server. Firstly, because the restaurant staff should be able to access the data and see, who made reservations. Secondly, the data of the available free tables should be accessible for visitors of the website.

**4. Implement a button that, when clicked, reassigns the form’s controls to their original values. The button should be labeled “Start over.” Your solution should not use an event handler. Just show the input element, nothing else.**

**My answer:**
```html
<input type="reset" value="Start over">
```

**5. The following code is syntactically correct and would work if combined with the usual HTML structural elements, but it has many style mistakes, a few output display mistakes, and a maintainability mistake. Provide an improved function definition with none of those mistakes.**
```html
<script>
function displaymessage (name,month,day,year){
birthdaywish=document.getElementById("msg");
birthdaywish.innerHTML=name+"was born on"+month+day+", "+year+".
Happy birthday!"}
</script>
<body>
<input type="button" value="Click me"
onclick =
"displaymessage('Taylor Swift', 'December', '13', '1989');">
<br>
<p id="msg"></p>
</body>
```

**My answer:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Birthday Wishes</title>
  <script>
    function displayMessage(name, month, day, year) {
      var birthdayWish = document.getElementById("msg");
      birthdayWish.innerHTML = name + " was born on " + month + " " + day + ", " + year + ".<br>Happy birthday!";
    }
  </script>
</head>
<body>
  <input type="button" value="Click me" onclick="displayMessage('Taylor Swift', 'December', '13', '1989');">
  <br>
  <p id="msg"></p>
</body>
</html>

```

**6. Why is it good to use `var` for same-named variables that are in different functions?**

**My answer:** Firstly, using `var` helps programmers to identify the variables in a function quickly, and that makes the function easier to understand and maintain. Secondly, if `var` is not used for a variable, then the JavaScript engine creates a global variable. Such scenario can be dangerous in that if you coincidentally use same-named variables in different functions, changing the variable’s value in one function affects the variable in the other function. By using `var`, you can use same-named variables in different functions, and the JavaScript engine creates separate local variables.

> Written with [StackEdit](https://stackedit.io/).
