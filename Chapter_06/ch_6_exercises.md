# Chapter 6 Exercises

### 1. Provide a link element (and nothing else) that, when clicked, causes an end user to download an image file of a dog in a tree. Search for a real image and use its URL.

```html
<a download href="images/dog.jpg">Picrure of a dog in a tree.</a>
```

### 2. Provide proper HTML5 container code (start tag, enclosed content, end tag) for a link that takes the user to a page named `hawaii.html` that’s located in a directory named `vacation`. The `vacation` directory is a subdirectory in the current directory’s parent directory. The link should display a label that says, “Hawaii pictures.”

```html
<a href="../vacation/hawaii.html">Hawaii pictures</a>
```

### 3. How are an absolute URL and a path-absolute URL different?

An absolute URL specifies the complete web address, including the protocol and domain, while a path-absolute URL begins with a forward slash (/) and is appended to the base URL. For example, an absolute URL is `https://www.example.com/page`, and a path-absolute URL is `/page` when used on the same domain.

### 4. Given the following web page. Clicking the Drivers education classes link (underlined) causes the browser to jump to the Drivers education classes heading. Provide the code for that link element. Also provide the code for the `h4` heading element that is the target of that link. You do not have to provide code for the entire web page, only the link element and the `h4` element. As usual, use proper style.

```html
<a href="#classes">Drivers education classes</a>
...
<h4 id="classes">Drivers education classes</h4>
```

### 5. Provide three CSS rules that implement links as follows. All links should have no underlining. Unvisited links should be dark green. Visited links should be pink.

```css
a {text-decoration: none;}
a:link {color: darkgreen;}
a:visited {color: pink;}
```

### 6. How many different levels of transparency can a PNG image have?

PNG images can have 256 levels of transparency.

### 7. Download and install GIMP on your home computer. Use GIMP to create a red-bordered heart icon with a transparent outer background and a white interior. Paste your heart icon on top of other text such that the heart’s transparent background is obvious. Note the following example, with two of the hearts pasted on top of some arbitrary large-font text:
#### Some arbitrary large-font text

### 8. Find a device emulator website that shows what responsive web pages look like on different user-specified platforms. Load Figure 6.17’s Dominican Republic Kids web page into an emulator for the latest iPhone. Provide a screenshot of the result.

The Mozilla Firefox browser that I use has the feature called Responsive Design Mode. To call it, you should use the combination of keys Ctrl+Shift+M, while viewing the page that you want to test on different devices. It has a drop-down list that includes whatever devices you have selected from the Device Settings screen.

> Written with [StackEdit](https://stackedit.io/).
