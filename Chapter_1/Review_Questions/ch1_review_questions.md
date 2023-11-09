# Chapter 1 Review Questions

### 1. What is a web server?
**My answer:** A web server is a software application or hardware device that stores and delivers web content, such as web pages, files, and multimedia, to users over the internet. It responds to requests from web browsers and other client applications, serving the requested content by processing the HTTP (Hypertext Transfer Protocol) requests it receives, and sending back the corresponding web pages or resources to the requesting devices, enabling users to access and view websites and online content.

### 2. Name two features of a web authoring tool.
**My answer:** Web authoring tools are software applications used to create and edit web content, including websites and web pages. Two key features of web authoring tools are:
1.  WYSIWYG Editing: Many web authoring tools offer a "What You See Is What You Get" (WYSIWYG) interface, allowing users to create web content visually, similar to working with a word processor or design software. This feature enables users to see the web page's appearance as they edit it, making it easier for individuals without extensive coding knowledge to design and format web pages.

2.  Code Editing Capability: While catering to users who prefer a visual approach, web authoring tools also often include code editing capabilities. This allows experienced web developers to access and modify the underlying HTML, CSS, and JavaScript code directly, providing greater flexibility and control over the web content's structure and behavior. This dual functionality accommodates a wide range of users, from beginners to advanced web designers and developers.

### 3. What term is used to describe code that is freely available to view and edit?
**My answer:** The term ***open source*** refers to software, code, or projects that are made available to the public with a license that allows anyone to view, use, modify, and distribute the source code freely. This collaborative and transparent approach fosters community-driven development and innovation, enabling a wide range of people to contribute to and benefit from the project. Open source has become a fundamental part of the software and technology industry, leading to the creation of many widely-used applications, libraries, and tools. It promotes transparency, accessibility, and a spirit of cooperation in software development.


### 4. What does HTTP stand for?
**My answer:** The HTTP refers to the hypertext transfer protocol, where a protocol is a set of rules and formats
for exchanging messages between computers.

### 5. What does URL stand for?
**My answer:** URL stands for "Uniform Resource Locator." It is a reference or address used to locate resources on the internet, such as web pages, files, or other online content. URLs consist of various components, including the protocol (e.g., `"http"` or `"https"`), the domain name or IP address, and the specific path or resource identifier, allowing web browsers and other software to access and retrieve the desired information from web servers.


### 6. What is the name of the HTML element that generates the smallest heading?
**My answer:** The `<h6>` HTML element defines the smallest heading and `<h1>` defines the largest.

### 7. What is syntax?
**My answer:** Syntax refers to the set of rules and conventions that dictate the structure and organization of a programming language or a formal language, such as a markup language. It defines how statements or elements within the language should be arranged, formatted, and sequenced to be considered valid and understandable by a computer or interpreter. In the context of programming languages, syntax governs the correct use of keywords, punctuation, and operators to create valid code. Deviating from the prescribed syntax can result in errors or the code not functioning as intended.

### 8. What is the purpose of the `title` element?
**My answer:** The "title" element in HTML is used to define the title of a web page. It serves several important purposes:

1.  Browser Tab Text: The text specified within the "title" element appears in the title bar or tab of a web browser when a user visits the web page.
    
2.  Search Engine Optimization (*SEO*): Search engines use the content of the "title" element to understand the topic or subject matter of a web page.
    
3.  Bookmarking: When users bookmark a web page or add it to their favorites, the text from the "title" element is often used as the default name for the bookmark.

### 9. For the `meta` element, what is the purpose of the `name` attribute and the `content` attribute?
**My answer:** The `name` attribute of the `meta` element, specifies the type or name of the metadata being provided.
For example: `"keywords"`, `"description"`, `"author"`, `"viewport"` and more, depending on the specific purpose of the metadata.
The `content` attribute is used to define the actual content or value of the metadata specified by the `name` attribute.
It provides additional information, descriptions, or values associated with the metadata type.
```html
<meta name="description" content="This is a sample web page about HTML and metadata.">
<meta name="keywords" content="HTML, metadata, web development, coding">
```

### 10. For the `meta charset` element, what does the value `utf-8` stand for? Specifically, what do `u`, `t`, `f`, and `8` stand for individually?
**My answer:** The value `utf-8` in the `meta charset` element indicates that the document is encoded using the ***Unicode Transformation Format 8-bit***, which is a versatile and widely used character encoding for handling text in various languages and scripts.

### 11. What does the following CSS rule do: `p {text-align: right;}` ?
**My answer:** It targets all `<p>` elements and sets the text alignment to "right," which means that the text content within the paragraphs will be aligned to the right margin of their containing element or the right side of their parent container. So, any text content within `<p>` elements in the HTML document will appear aligned to the right side of the page or container rather than the default left alignment.

### 12. Who designed the HTTP protocol?
**My answer:** The HTTP (Hypertext Transfer Protocol) protocol was designed by Tim Berners-Lee, a British computer scientist who is often credited with inventing the World Wide Web. Tim Berners-Lee developed HTTP along with the first web browser and web server software in the early 1990s while working at CERN (the European Organization for Nuclear Research) in Switzerland. HTTP is a fundamental protocol that enables the transfer of text, images, videos, and other resources over the internet, forming the basis of the modern web.

### 13. Who founded the W3C? Name one person.
**My answer:** The World Wide Web Consortium (W3C) was founded by Sir Tim Berners-Lee. He established the W3C in October 1994 to standardize and promote technologies and protocols for the World Wide Web. The W3C plays a crucial role in developing and maintaining web standards and recommendations, including HTML, CSS, and various other web technologies.

### 14. Why did users tend to dislike XHTML 1.1?
**My answer:** Users tended to dislike XHTML 1.1 because it introduced stricter syntax and error handling, making it less forgiving of common markup mistakes compared to earlier HTML versions. It required a more rigid adherence to XML rules, leading to compatibility issues with existing web content and browsers. Additionally, the transition to XHTML 1.1 demanded a higher level of technical knowledge, which was challenging for many web developers and hindered widespread adoption.

### 15. The HTML5 standard requires every attribute to have a quoted value. True or false.
**My answer:** False. While HTML5 allows for unquoted attribute values, using quotes is recommended to avoid potential parsing issues and make the code more maintainable.

> Written with [StackEdit](https://stackedit.io/).
