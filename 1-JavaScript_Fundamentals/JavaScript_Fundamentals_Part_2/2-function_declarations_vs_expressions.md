In JavaScript, functions can be defined using two main approaches: function declarations and function expressions. While both approaches define functions, they differ in how they are created and behave in terms of hoisting, accessibility, and usage.

1. **Function Declarations**:
   - Function declarations define a named function using the `function` keyword followed by the function name, parameters (if any), and function body. They are typically hoisted to the top of their scope, meaning they can be called before they are declared.
   - Function declarations are accessible throughout their scope, regardless of where they are called within the scope.
   - Function declarations are often used for defining standalone functions or functions that need to be accessed from various parts of the code.

   Example:
   ```javascript
   function greet(name) {
       console.log("Hello, " + name + "!");
   }
   ```

2. **Function Expressions**:
   - Function expressions define a function as part of an expression. They can be named (function expressions with a name are useful for referencing themselves from within the function) or anonymous (where the function has no name).
   - Function expressions are not hoisted like function declarations. They are only available after they have been defined in the code.
   - Function expressions can be assigned to variables or passed as arguments to other functions.

   Example:
   ```javascript
   let greet = function(name) {
       console.log("Hello, " + name + "!");
   };
   ```

   Anonymous function expression:
   ```javascript
   let greet = function(name) {
       console.log("Hello, " + name + "!");
   };
   ```

3. **Key Differences**:
   - Hoisting: Function declarations are hoisted, meaning they are available throughout their scope even before their actual declaration in the code. Function expressions are not hoisted.
   - Accessibility: Function declarations are accessible throughout their scope. Function expressions are only accessible after they have been defined.
   - Usage: Function declarations are often used for defining standalone functions or functions that need to be accessed from various parts of the code. Function expressions are useful when creating functions as part of an expression, such as passing a function as an argument or assigning it to a variable.

In summary, function declarations and function expressions are two different ways to define functions in JavaScript, each with its own characteristics and best use cases. Understanding these differences can help you choose the appropriate approach for defining functions in your code.