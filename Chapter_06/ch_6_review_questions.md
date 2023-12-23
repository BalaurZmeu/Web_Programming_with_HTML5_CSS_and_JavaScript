# Chapter 6 Review Questions

### 1. In the `a` element, what attribute specifies the resource that is to be loaded when the user clicks the link?

The attribute `href` of the `a` element specifies the resource that is to be loaded when the user clicks the link. The abbreviation `href` stands for "hypertext reference". The `href` attribute is commonly used in HTML (Hypertext Markup Language) to specify the URL (Uniform Resource Locator) of a linked resource, such as a webpage or a file. The value of the `href` attribute is the address or path that the link points to.

### 2. What is a home page?

A homepage, typically refers to the main or initial page of a website. It is the front or primary page that users see when they visit a website. The homepage serves as the starting point for navigating the site and often provides an overview of the site's content, purpose, and navigation options. Homepages often include a navigation menu, a search bar, an introduction or welcome, a logo.

### 3. In a path, what is the purpose of `..`?

In a file system path, the `..` (double dot) notation represents the parent directory of the current directory. It is used for navigating up one level in the directory hierarchy. This is part of a convention in many file systems to organize directories and files in a hierarchical structure.

### 4. What is the difference between user interface design and user experience design?

User Interface (UI) design focuses on the visual elements and presentation of a product, dealing with components like buttons and layouts. User Experience (UX) design is a broader discipline that encompasses the overall user journey, emphasizing the entire user experience, including emotional and behavioral aspects. UI is a subset of UX, with UI design specifically addressing the look and feel of the interface. While UI is concerned with aesthetics and interactivity, UX extends to understanding user needs, conducting research, and ensuring a positive, seamless overall experience. Both UI and UX design are essential for creating successful and user-friendly products.

### 5. For nontrivial websites, which sort of navigation organizational structure is the most popular: linear, hierarchical, or mixed?

For nontrivial websites, a mixed or hybrid navigation structure is often the most popular choice. This approach combines elements of linear and hierarchical structures, allowing for flexibility and accommodating various content types. By incorporating dropdown menus, mega-menus, and links, a mixed navigation structure provides users with multiple pathways to navigate complex websites efficiently.

### 6. What is a placeholder link?

A placeholder link is represented by an `a` element whose `href` attribute does not point to an actual resource. These placeholder links are commonly used during development with the intention of being replaced later with functional URLs.

### 7. What happens if you have a CSS table with table-cell elements that are not surrounded by a table-row element?

If you have table-cell elements that are not surrounded by a table-row element, the browser engine generates an anonymous (hidden) table-row element around those table-cell elements.

### 8. What are the traditional default colors for unvisited and visited links?

The traditional default color for unvisited links is blue, and the default color for visited links is purple. These colors are widely recognized in web design conventions. However, these defaults can be customized using CSS to align with a website's visual style.

### 9. What selector matches links that the mouse is hovering over?

The type selector `a` used in combination with the pseudo class selector `:hover`.

```css
a:hover {css-rule: value;}
```

### 10. What attribute-value pair should you use to cause a link to open its linked-to page in a separate window or tab?

To open a link in a separate window or tab, you can use the `target` attribute with the value "_blank." For example, this code will make the link open in a new tab or window when clicked:

```html
<a href="https://www.example.com" target="_blank">Visit Example Website</a>
```

### 11. The default functionality for clicking a link is for the new page to load within the current web browser and overlay the previous page. True or false.

True. The default functionality for clicking a link is for the new page to replace the current page within the same web browser tab. If you want the link to open in a new window or tab, you need to specify the target attribute, for example, `target="_blank"`.

### 12. What is the meaning of the word “bitmap” for bitmap image files?

A bitmap is a type of graphic that represents images as a grid of individual pixels. Each pixel in the grid is assigned a specific color, and each color value is a sequence of bits. Together the bits form the complete image. Bitmap images are resolution-dependent, and editing them can result in a loss of image quality.

### 13. What is a color palette?

A color palette is the entire set of colors used in a particular image file.

### 14. Which type of image format is usually better for photographs—GIF or JPG?

JPEG (JPG) is usually better for photographs as it supports a wide range of colors and provides good compression, resulting in smaller file sizes without significant loss of quality. GIF, on the other hand, is more suitable for simple graphics and images with limited colors, as it uses a lossless compression method.

### 15. An offshoot of the PNG working group created an image file format that supports animation. What is the name of that image file format?

MNG and APNG. MNG (Multiple-image Network Graphics) is an older image file format supporting animations, while APNG (Animated Portable Network Graphics) is a more recent and simpler alternative developed as an extension of PNG, offering better browser support for animated images on the web. APNG allows for the display of animated images with a similar structure to PNG but includes support for multiple frames and animation sequences.

### 16. Why is the `img` element’s `alt` attribute particularly important for end users who are visually impaired?

End users who are visually impaired will often use screen readers, and screen readers attempt to render `img` elements by reading aloud the `alt` attribute’s value.

### 17. Why is it good to always include an `img` element’s `width` and `height` attributes?

Including the `width` and `height` attributes in an `img` element is good practice because it helps browsers allocate the necessary space on the page before the image loads, preventing layout shifts and improving the overall user experience. Additionally, specifying these attributes assists in the proper rendering of the page, especially when images are disabled or take time to load, as it ensures the correct dimensions are reserved.

### 18. When a vector graphics image gets resized, why does it avoid the degradation experienced by bitmap images?

Vector graphics images are resolution-independent and describe images using mathematical equations, allowing them to be scaled infinitely without loss of quality. Unlike bitmap images, which consist of a fixed grid of pixels, vectors can be recalculated at any size, ensuring sharp and smooth edges even when resized. This scalability makes vector graphics suitable for various display sizes and resolutions without the degradation commonly seen in bitmap images.

### 19. Beside the ability to resize without degradation, what is a benefit of using an SVG file over a bitmap image file?

SVG files tend to be smaller, and that leads to faster web page downloads.

### 20. For SVG images, what is an advantage of using an `svg` element as opposed to an `img` element?

For SVG images, an advantage of using an `svg` element as opposed to an `img` element is that with an `svg` element, the SVG code is embedded within the HTML code, and that means you can use JavaScript to dynamically manipulate any of the elements in the SVG code.

### 21. What is responsive web design?

Responsive web design is an approach to designing and coding websites that ensures they adapt and function seamlessly across a variety of devices and screen sizes. It involves using flexible grids and layouts, CSS media queries, and fluid images to create a consistent user experience regardless of the device being used.

> Written with [StackEdit](https://stackedit.io/).
