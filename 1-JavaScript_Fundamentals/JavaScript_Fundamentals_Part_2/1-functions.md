Functions in JavaScript are blocks of code that perform a specific task or return a value. They are one of the fundamental building blocks of JavaScript programming and are widely used for code organization, abstraction, and reusability.

Here's how you can define and use functions in JavaScript:

1. **Function Declaration**:
   You can declare a function using the `function` keyword followed by the function name, parameters (if any), and the function body enclosed in curly braces `{}`.

   ```javascript
   function greet(name) {
       console.log("Hello, " + name + "!");
   }
   ```

2. **Function Expression**:
   You can also define a function using a function expression, where the function is assigned to a variable.

   ```javascript
   let greet = function(name) {
       console.log("Hello, " + name + "!");
   };
   ```

3. **Arrow Function** (ES6+):
   Arrow functions provide a concise syntax for defining functions. They are especially useful for short, single-expression functions.

   ```javascript
   let greet = (name) => {
       console.log("Hello, " + name + "!");
   };
   ```

4. **Function Invocation**:
   Once a function is defined, you can call or invoke it by using its name followed by parentheses `()`.

   ```javascript
   greet("Alice"); // Output: Hello, Alice!
   ```

5. **Function Parameters**:
   Functions can accept parameters, which are variables that hold the values passed to the function when it's called.

   ```javascript
   function add(a, b) {
       return a + b;
   }

   console.log(add(2, 3)); // Output: 5
   ```

6. **Return Statement**:
   Functions can use the `return` statement to return a value to the caller. Once a `return` statement is executed, the function stops executing further code.

   ```javascript
   function multiply(a, b) {
       return a * b;
   }

   console.log(multiply(2, 3)); // Output: 6
   ```

7. **Function Scope**:
   Variables declared inside a function are scoped to that function and are not accessible from outside the function.

   ```javascript
   function myFunction() {
       let x = 10;
       console.log(x); // Output: 10
   }

   console.log(x); // Error: x is not defined
   ```

These are the basic concepts of functions in JavaScript. Functions are a powerful tool for organizing and modularizing code, making it more readable, maintainable, and reusable.