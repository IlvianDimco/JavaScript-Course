In JavaScript, functions can call other functions to perform a sequence of tasks or to modularize code by breaking it into smaller, reusable parts. This process is known as function composition.

Here's how you can call one function from another in JavaScript:

1. **Function Invocation**:
   To call a function from another function, simply use the function's name followed by parentheses `()` with any required arguments inside.

   Example:
   ```javascript
   function greet() {
       return "Hello";
   }

   function greetUser(name) {
       return greet() + ", " + name;
   }

   console.log(greetUser("Alice")); // Output: "Hello, Alice"
   ```

   In this example, the `greetUser` function calls the `greet` function to obtain the greeting message and concatenates it with the provided `name` parameter.

2. **Passing Arguments**:
   You can pass arguments to the called function just like you would with a regular function call. These arguments can be variables, literals, or expressions.

   Example:
   ```javascript
   function multiply(a, b) {
       return a * b;
   }

   function squareAndDouble(x) {
       return multiply(x, multiply(x, 2));
   }

   console.log(squareAndDouble(3)); // Output: 18 (3 * 3 * 2)
   ```

   In this example, the `squareAndDouble` function calls the `multiply` function twice, passing `x` and `2` as arguments to compute the square and then double the result.

3. **Returning Values**:
   Functions can return values to the caller, and these values can be used in the calling function just like any other value.

   Example:
   ```javascript
   function add(a, b) {
       return a + b;
   }

   function subtractAndDouble(x, y) {
       let result = subtract(x, y);
       return result * 2;
   }

   console.log(subtractAndDouble(10, 5)); // Output: 10 (result of (10 - 5) * 2)
   ```

   In this example, the `subtractAndDouble` function calls the `subtract` function to obtain the difference between `x` and `y`, then doubles the result before returning it.

Calling functions from other functions allows for modular and reusable code, making it easier to manage complexity and maintainability in JavaScript applications.