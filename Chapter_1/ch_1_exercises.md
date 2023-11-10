# Chapter 1 Exercises

**1. Search the Internet for a good web hosting service. Describe features of your chosen web hosting service that would make it a good service for your needs (if you don’t have any needs, then make some up). You can describe the features in paragraph form or in bullet form, but you must use your own words. Which URL(s) did you use to find your information?**

**My answer:** Here are notable features of Google Cloud's web hosting services:

1. **Google Cloud Platform (GCP) Infrastructure:**
Google Cloud provides a robust and scalable infrastructure that allows users to deploy their web applications on a global network of data centers. This ensures low-latency access and high availability for users worldwide.

3. **App Engine for Managed Services:**
Google App Engine is a fully managed platform-as-a-service (PaaS) that allows developers to build and deploy applications without managing the underlying infrastructure. It automatically handles tasks such as patching, monitoring, and scaling, enabling developers to focus on writing code.

4. **Compute Engine for Custom Virtual Machines:**
Google Cloud's Compute Engine offers users the flexibility to create and manage virtual machines (VMs) tailored to their specific requirements. Users have control over the configuration and can choose from various machine types, operating systems, and storage options.

I used the following URL: `https://cloud.google.com/solutions/web-hosting/?hl=en`

**2. Use the statCounter web page to determine the most popular browsers for mobile devices. List the top three browsers in descending order (most popular first).**

**My answer:** The three most popular browsers for mobile devices are:

 1. Chrome 64.07%
 2. Safari 25.78%
 3. Samsung Internet 4.44%

[statCounter](https://gs.statcounter.com/browser-market-share/mobile/worldwide/2021)

**3. Explain all the parts of a URL. For example, in `https://mars.jpl.nasa.gov/msl/images/PIA16082_Mitrofanov1F-thm.jpg` ?**

**My answer:** A URL (Uniform Resource Locator) is a reference used to locate and identify resources on the internet. Each part of a URL has a specific purpose and provides information about how to access the resource. Let's break down the different components of this URL:

1. `https`: This is the URL scheme or protocol. It specifies the method or protocol used to access the resource. In this case, it's `https`, which stands for Hypertext Transfer Protocol Secure. It indicates that the data exchanged between the web server and the client (browser) is encrypted for security.

2. `mars`: This is the domain or hostname. It identifies the specific web server where the resource is located. In this example, it's `mars`, which could represent a subdomain or a directory on the web server. So, `mars` in the subdomain is a way of categorizing and organizing content on the NASA JPL website, making it easier for users to navigate and understand the context of the information they are accessing.

3. `jpl.nasa.gov`: This is the domain name. It further specifies the web server's location. In this case, it's `jpl.nasa.gov`, which is a domain owned by NASA's Jet Propulsion Laboratory (JPL). The domain name helps route the request to the correct server on the internet.

4. `msl/images`: This is the path. It defines the specific location or directory structure on the web server where the resource is stored. In this example, it points to a directory named `msl`, which contains an `images` directory. The web server will navigate this path to find the requested resource.

5. `PIA16082_Mitrofanov1F-thm.jpg`: This is the resource identifier or filename. It specifies the name of the actual resource you are trying to access. In this case, it's `PIA16082_Mitrofanov1F-thm.jpg`, which appears to be the filename of an image.

In summary, this URL tells the web browser to use the HTTPS protocol to access a resource located on the `mars.jpl.nasa.gov` server. The resource is in the `msl/images` directory and is named `PIA16082_Mitrofanov1F-thm.jpg`. The combination of these components allows the browser to retrieve and display the specified image from the NASA web server.

**4. What is the difference between a container element and a void element?**

**My answer:** A container element in HTML is an element that can contain other elements and text within its opening and closing tags, defining a specific structure in the document. Examples include `<div>`, `<p>`, and `<span>`. On the other hand, a void element, also known as empty element, is an element in HTML that cannot have content or child elements, such as `<img>` or `<br>`. Void elements serve a specific purpose, often representing standalone content like images or line breaks.

**5. What is the purpose of the `DOCTYPE` instruction?**

**My answer:** The `DOCTYPE` (Document Type Declaration) instruction in HTML serves to define the document type and version, providing information to the browser about the HTML specifications the document follows. It helps browsers render the content correctly by triggering the appropriate rendering mode. The `DOCTYPE` declaration is placed at the beginning of an HTML document and ensures compatibility and consistency in how browsers interpret and display the content.

**6. What is wrong with the following `body` code fragment in terms of the positions of the tags? In your answer, you must (a) use the appropriate term to describe the problem and (b) show how the code should be rearranged.**
```html
<body>
<p>
I hate when I'm studying and a velociraptor throws bananas at me.
Does that happen to anyone else?
<strong>I hope not!
</p>
</strong>
</body>
```

**My answer:** Container elements must be properly nested, meaning that if you start a container inside another container, you must end the inner container before you end the outer container. In the code above the problem is that the `<strong>` element starts inside the `<p>` element, but it's closing tag is outside the parent `<p>` container. So, it is nested wrong. Here is the solution:
```html
<body>
<p>
I hate when I'm studying and a velociraptor throws bananas at me.
Does that happen to anyone else?
<strong>I hope not!</strong>
</p>
</body>
```

**7. Provide HTML5 code for a paragraph that contains the following Spanish text from Ernesto Sabato’s On Heroes and Tombs. As always, use proper coding conventions. You must provide code such that search engines are able to identify the paragraph as containing Spanish. You are to assume that only the one paragraph contains Spanish and not the whole page.**

**La vanidad es tan fantastica, que hasta nos induce a preocuparnos de lo que pensaran de nosotros una vez muertos y enterrados.**

**My answer:**
```html
<p lang="es">
  La vanidad es tan fantastica, que hasta nos induce a preocuparnos de lo que pensaran de nosotros una vez muertos y enterrados.
</p>
```

**8. What is the difference between a `<p>` element and a `<div>` element?**

**My answer:** The `<p>` element is specifically designed for paragraphs of text. It automatically adds space above and below the content, providing a visual separation between paragraphs. The `<div>` element is a more generic container used for structuring and grouping content, often employed for layout purposes or to apply styles to a group of elements.

**9. Name something important that Ian Hickson did for the Web, and be specific. Ian is not in this book, so you’ll need to look him up.**

**My answer:** Ian "Hixie" Hickson is the author and maintainer of the Acid2 and Acid3 tests, the WHATWG HTML 5 specification, and the early working draft of Web Applications 1.0. He is known as a proponent of Web standards, and has played a crucial role in the development of specifications such as CSS. Hickson was a co-editor of the CSS 2.1 specification.

He now works for Google in the San Francisco Bay Area, and is the specification editor of the Web Hypertext Application Technology Working Group (WHATWG).

**10. This exercise attempts to get you to explore the W3C’s website. Find something interesting on the W3C site. You can describe the features in paragraph form or in bullet form, but you must use your own words. Which URL(s) did you use to find your information?**

**My answer:** The W3C (World Wide Web Consortium) developers' page provides a comprehensive set of resources and tools for web developers to stay informed about web standards and best practices. The page includes access to the latest specifications and drafts, ensuring developers are up-to-date with evolving web technologies. It offers documentation, guides, and tutorials to assist developers in implementing and understanding W3C standards. The W3C developers' page fosters a collaborative environment by encouraging participation in working groups, where developers can contribute to shaping the future of web standards. Additionally, the page provides links to validation tools and testing resources, supporting developers in creating interoperable and accessible web content that aligns with global standards. For the most accurate and current information, it is recommended to visit the W3C developers' page directly on their official website.

I used the following URL: `https://www.w3.org/developers/`

**11. Using the text input mode, enter the following code into W3C’s HTML validation service. What error messages are generated? Hint: There are three error messages, but only two problems with the code. You may provide the three error messages verbatim or explain the two problems.**
```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>test title</title>
</head>
<body>
<h7>test heading
</body>
</html>
```

**My answer:** After running the W3C’s HTML validation on the code above, it showed that the header element `<h7>` is not valid. The smallest heading in HTML is `<h6>`. Also the header element has the opening tag, but is lacking the closing tag. Also it is recommended to include the `<meta charset>` element.

Here is the solution:
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>test title</title>
</head>
<body>
<h6>test heading</h6>
</body>
</html>
```

> Written with [StackEdit](https://stackedit.io/).
