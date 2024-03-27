Manipulating CSS styles in JavaScript involves accessing the `style` property of an element and modifying its CSS properties directly. Here's how you can do it:

### Changing Inline Styles:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulating CSS Styles</title>
    <style>
        /* Example CSS */
        .highlighted {
            background-color: yellow;
            color: blue;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <button id="myButton">Toggle Highlight</button>

    <script>
        var button = document.getElementById("myButton");

        // Toggle highlighted class when the button is clicked
        button.addEventListener("click", function() {
            var element = document.getElementById("myElement");
            element.classList.toggle("highlighted");
        });
    </script>
</body>
</html>
```

In this example:

1. We have an HTML button element with the id "myButton".
2. There's also a CSS style defined in the `<style>` tag.
3. When the button is clicked, we select an element with the id "myElement" and toggle the "highlighted" class on it.

### Manipulating Inline Styles Directly:

```javascript
var element = document.getElementById("myElement");

// Change inline styles directly
element.style.backgroundColor = "yellow";
element.style.color = "blue";
element.style.fontWeight = "bold";
```

### Manipulating Classes:

```javascript
var element = document.getElementById("myElement");

// Add a class
element.classList.add("highlighted");

// Remove a class
element.classList.remove("highlighted");

// Toggle a class
element.classList.toggle("highlighted");

// Check if a class exists
if (element.classList.contains("highlighted")) {
    // Do something
}
```

### Note:
- When manipulating styles directly using the `style` property, you're modifying inline styles. These styles take precedence over styles defined in external stylesheets or style elements.
- Using classes for styling is often preferable because it separates structure from presentation and allows for better maintainability and reusability.
- With classes, you can define styles in CSS and apply or remove them dynamically using JavaScript, as shown in the first example.

Choose the method that best suits your needs and coding practices.