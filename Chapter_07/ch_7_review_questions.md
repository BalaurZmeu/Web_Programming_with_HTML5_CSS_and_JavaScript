# Chapter 7 Review Questions

### 1. Using `float: right` causes text to display (float) along an image’s right boundary. True or false.

**My answer:** False. When the `float: right` property-value pair is applied to an image element surrounded by text, the image will move to the right side of its containing element. The text will then wrap around the left side of the image, creating a layout where the image aligns to the right while text flows around its left side.

### 2. The `align-text` property can be used to align images within a block element. True or false.

**My answer:** False. There is no `align-text` property in CSS. To align images within a block element, you can use the `text-align` property on the parent element or use other positioning techniques. Additionally, the `img` element is inline by default, but its display behavior can be modified using CSS, such as changing it to block or inline-block.

### 3. When implementing a shortcut icon, why should the icon have small square dimensions?

**My answer:** Favicons with small square dimensions, such as 16x16 or 32x32 pixels, are recommended for consistency across browsers and platforms. These dimensions ensure that the favicon appears clear and recognizable in limited spaces like browser tabs and bookmarks. Square favicons maintain visibility and avoid distortion when displayed in various user interfaces.

### 4. What is a browsing context?

**My answer:** A browsing context is an environment in which a particular document is presented and viewed. It can be a window or a tab in a web browser, and each browsing context maintains its own set of documents, scripts, and rendering state. Multiple browsing contexts can exist within the same browser, allowing users to interact with different web pages simultaneously. The `iframe` (inline frame) element in HTML represents a browsing context. An `iframe` allows you to embed another HTML document within the current document, creating a separate browsing context for the content within the iframe. This enables the inclusion of external web pages or content from different sources within a single page.

### 5. What is a thumbnail?

**My answer:** A thumbnail is a small, scaled-down version of a larger image or video, typically used as a preview. Thumbnails are commonly used in web design, image galleries, and video platforms to provide a visual overview of the content. They serve as clickable or tappable links, allowing users to access the full-sized media by selecting the thumbnail.

### 6. What is a rollover?

**My answer:** A rollover is when an image file changes because the user moves the mouse over the image.

### 7. In implementing an image sprite, what does the `background-position` property do?

**My answer:** The background-position property specifies the x and y coordinates for where the image file content’s top-left corner gets positioned in relation to the background image’s element.

### 8. For a user to play an audio clip supplied by an HTML5 `audio` element, what audio plug-in will the user need to install?

**My answer:** With HTML5, no audio plug-in is necessary. Browsers that support HTML5 have built-in audio players.

### 9. What happens if an `audio` element includes `preload="auto"`?

**My answer:** If an audio element includes preload="auto", the browser takes that as a suggestion to download the audio file when the page loads initially.

### 10. For the `audio` element, it’s usually a good idea to include a `loop` attribute. True or false.

**My answer:** False. Including a `loop` attribute in the `audio` element can be a bad idea because it causes the audio to play continuously, potentially annoying or distracting users. Without user control, it may lead to a poor user experience, especially if the webpage visitors find it difficult to stop or control the audio playback.

### 11. Suppose a web page uses the `background-image` property to cover the web page’s background with an image. By default, if the image is smaller than the viewport, what does the browser do to cover the web page’s background?

**My answer:** The browser fills the entire viewport by displaying multiple copies of the image using a tiled layout.

### 12. How does every at-rule begin?

**My answer:** Every at-rule begins with the "@" symbol. For example:
```css
@font-face {font-family: "Trickster";}
```

### 13. In implementing web fonts for your web pages, what are the two most useful web font formats?

**My answer:** The two recommended file formats for web fonts are WOFF and WOFF 2.0. These formats are widely supported across modern browsers and provide efficient compression, resulting in faster page loading times. Including both WOFF and WOFF2 versions of a web font ensures compatibility and optimal performance across various devices and platforms.

### 14. In defining a web font, why is it good to use multiple versions of the web font’s file?

**My answer:** In defining a web font, it’s good to use multiple versions of the web font file, with a different format for each file, because different browsers support different file formats.

### 15. For a `video` element, what is the purpose of the `poster` attribute?

**My answer:** The poster attribute specifies an image file that serves as a placeholder for display while the video is not playing.

### 16. For a `video` element, why might you want to specify `preload="none"`?

**My answer:** For a video element, the purpose of specifying `preload="none"` is to avoid using too much bandwidth or when you’re unsure as to whether your users will want to view the video.

### 17. Assume you have an element with a flexible box layout. What CSS property-value pair is needed to center the element’s content vertically?

**My answer:** To center an element's content vertically in a flexible box layout, you can use the CSS property-value pair `align-items: center;`. This aligns the items along the cross-axis (vertically in a row layout or horizontally in a column layout) of the flex container. Combining this with `justify-content: center;` centers the content both vertically and horizontally within the flexible container.

### 18. What is the default direction for positioning a linear gradient’s colors?

**My answer:** The default direction for positioning a linear gradient's colors is from top to bottom. The gradient starts at the top edge of the element and progresses vertically downward.

> Written with [StackEdit](https://stackedit.io/).
