Handling click events in JavaScript involves attaching event listeners to elements and defining the actions to be taken when those elements are clicked. Here's a basic example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Click Event Handling</title>
</head>
<body>
    <button id="myButton">Click Me</button>

    <script>
        // Select the button element
        var button = document.getElementById("myButton");

        // Attach a click event listener to the button
        button.addEventListener("click", function() {
            // Actions to perform when the button is clicked
            alert("Button clicked!");
        });
    </script>
</body>
</html>
```

In this example:

1. We have an HTML button element with the id "myButton".
2. In the script section, we select the button element using `document.getElementById("myButton")`.
3. We then attach a click event listener to the button using `addEventListener`.
4. Inside the event listener function, we define the actions to be performed when the button is clicked, in this case, showing an alert with the message "Button clicked!".

When the button is clicked, the event listener function is executed, triggering the alert dialog.

You can replace the alert with any other action you want to perform in response to the click event, such as modifying the DOM, updating data, or navigating to another page.