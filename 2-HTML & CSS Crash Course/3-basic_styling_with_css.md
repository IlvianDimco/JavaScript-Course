CSS (Cascading Style Sheets) is used to style HTML elements and give them visual appearance. Below is a basic example of CSS styling:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic CSS Styling</title>
    <style>
        /* Targeting an HTML element */
        h1 {
            color: blue;
            font-size: 24px;
        }

        /* Targeting elements with a specific class */
        .important {
            font-weight: bold;
        }

        /* Targeting elements with a specific ID */
        #header {
            background-color: lightgray;
            padding: 10px;
            text-align: center;
        }

        /* Targeting multiple elements with the same class */
        .section {
            border: 1px solid black;
            padding: 10px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div id="header">
        <h1>Welcome to My Website</h1>
    </div>

    <div class="section">
        <h2>About Us</h2>
        <p>This is a paragraph about us.</p>
    </div>

    <div class="section important">
        <h2>Important Information</h2>
        <p>This is important information.</p>
    </div>

    <div class="section">
        <h2>Contact Us</h2>
        <p>Contact us at example@example.com</p>
    </div>
</body>
</html>
```

In this example:

- We define CSS rules within `<style>` tags in the `<head>` section of the HTML document.
- We use different selectors:
  - `h1` targets all `<h1>` elements and applies styles such as color and font-size.
  - `.important` targets elements with the class "important" and applies a bold font weight.
  - `#header` targets the element with the ID "header" and applies styles such as background color, padding, and text alignment.
  - `.section` targets elements with the class "section" and applies styles such as border, padding, and margin.
- We apply these styles to various HTML elements like headings (`<h1>`, `<h2>`), paragraphs (`<p>`), and `<div>` elements.

This is a basic demonstration of how CSS can be used to style HTML elements. You can further enhance your styles by using more CSS properties and selectors.