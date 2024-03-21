Sure! Here's a basic HTML structure along with some commonly used HTML elements:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum massa a ultrices bibendum.</p>
        </section>
        
        <section>
            <h2>Contact Us</h2>
            <form action="#" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name">
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email">
                
                <label for="message">Message:</label>
                <textarea id="message" name="message"></textarea>
                
                <button type="submit">Send</button>
            </form>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
</body>
</html>
```

Explanation of key elements:

1. `<!DOCTYPE html>`: Defines the document type and version of HTML being used.
2. `<html>`: The root element of the HTML document.
3. `<head>`: Contains meta-information about the HTML document, such as the character encoding, viewport settings, title, external stylesheets, and scripts.
4. `<meta>`: Provides metadata about the HTML document, such as character encoding and viewport settings.
5. `<title>`: Sets the title of the HTML document, which appears in the browser's title bar or tab.
6. `<link>`: Specifies the relationship between the current document and an external resource, such as a stylesheet.
7. `<script>`: Defines client-side JavaScript, either inline or by referencing an external script file. The `defer` attribute ensures that the script is executed after the document is parsed.
8. `<body>`: Contains the content of the HTML document that is visible to the user.
9. `<header>`: Represents introductory content typically at the beginning of a document or section, often containing headings, logos, and navigation menus.
10. `<nav>`: Defines a section of navigation links.
11. `<ul>` and `<li>`: Used together to create an unordered list of items.
12. `<main>`: Represents the main content of the HTML document.
13. `<section>`: Defines a section within a document, such as chapters, headers, footers, or any other thematic grouping of content.
14. `<h1>`, `<h2>`: Headings of various levels, where `<h1>` is the highest level.
15. `<p>`: Represents a paragraph of text.
16. `<form>`: Contains form elements for user input, such as text inputs, textareas, checkboxes, radio buttons, and buttons.
17. `<label>`: Defines a label for an input element.
18. `<input>`: Represents an input control that allows users to enter data.
19. `<textarea>`: Represents a multi-line text input control.
20. `<button>`: Represents a clickable button.
21. `<footer>`: Represents the footer of a document or section, typically containing copyright information, links to legal notices, and other relevant information.

These are just some of the basic HTML elements and structure commonly used in web development. You can expand on this structure and incorporate more elements and attributes as needed for your specific project.