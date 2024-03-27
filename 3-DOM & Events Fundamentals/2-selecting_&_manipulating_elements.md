Selecting and manipulating elements in the Document Object Model (DOM) is a fundamental aspect of web development. Here's how you can select and manipulate elements using JavaScript:

### Selecting Elements:

#### By ID:
```javascript
var elementById = document.getElementById("elementId");
```

#### By Class Name:
```javascript
var elementsByClass = document.getElementsByClassName("className");
```

#### By Tag Name:
```javascript
var elementsByTag = document.getElementsByTagName("tagName");
```

#### By CSS Selector:
```javascript
var elementBySelector = document.querySelector("CSSSelector");
var elementsBySelectorAll = document.querySelectorAll("CSSSelector");
```

### Manipulating Elements:

#### Changing Content:
```javascript
element.innerHTML = "New content"; // Change the HTML content
element.textContent = "New text";  // Change the text content
```

#### Changing Attributes:
```javascript
element.setAttribute("attributeName", "attributeValue"); // Set an attribute
element.getAttribute("attributeName");                   // Get an attribute
element.removeAttribute("attributeName");                // Remove an attribute
```

#### Changing Styles:
```javascript
element.style.property = "value"; // Modify inline styles
element.classList.add("className");    // Add a class
element.classList.remove("className"); // Remove a class
element.classList.toggle("className"); // Toggle a class
element.classList.contains("className"); // Check if a class exists
```

#### Creating and Appending Elements:
```javascript
var newElement = document.createElement("tagName"); // Create a new element
parentElement.appendChild(newElement);            // Append the new element
```

#### Removing Elements:
```javascript
parentElement.removeChild(childElement); // Remove a child element
```

### Event Handling:

#### Adding Event Listeners:
```javascript
element.addEventListener("eventType", function() {
    // Your event handling code here
});
```

#### Example:
```javascript
var button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Button clicked!");
});
```

These are some basic operations you can perform to select and manipulate elements in the DOM using JavaScript. With these techniques, you can dynamically change the content, appearance, and behavior of your web page based on user interactions or other events.