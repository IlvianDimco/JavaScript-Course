In JavaScript, `var`, `let`, and `const` are used to declare variables, but they have some differences in terms of scope, hoisting, and mutability. Here's an explanation of each:

1. **var**:
   - Variables declared with `var` are function-scoped or globally-scoped, but not block-scoped. This means that `var` variables are accessible throughout the function or globally if declared outside any function.
   - `var` declarations are hoisted to the top of their scope. This means that you can use a `var` variable before it's declared without getting an error, but the value will be `undefined`.
   - `var` variables can be re-declared and updated.
   
   Example:
   ```javascript
   function example() {
       if (true) {
           var x = 10;
       }
       console.log(x); // Outputs: 10 (x is accessible outside the block)
   }
   example();
   ```

2. **let**:
   - Variables declared with `let` have block scope, meaning they are accessible only within the block they are declared in (typically denoted by `{}`).
   - `let` variables are not hoisted to the top of their scope. If you try to access a `let` variable before it's declared, you'll get a ReferenceError.
   - `let` variables can be updated, but not re-declared within the same scope.
   
   Example:
   ```javascript
   function example() {
       if (true) {
           let x = 10;
       }
       console.log(x); // ReferenceError: x is not defined (x is not accessible outside the block)
   }
   example();
   ```

3. **const**:
   - Variables declared with `const` also have block scope, similar to `let`.
   - `const` variables must be initialized with a value and cannot be reassigned to a new value once initialized. However, for objects and arrays declared with `const`, their properties or elements can still be modified.
   - Like `let`, `const` variables are not hoisted to the top of their scope.
   
   Example:
   ```javascript
   function example() {
       const x = 10;
       x = 20; // TypeError: Assignment to constant variable
   }
   example();
   ```

In summary:

- Use `var` if you need variables with function or global scope and don't mind hoisting.
- Use `let` if you need block-scoped variables that can be reassigned.
- Use `const` for variables that should never be reassigned after initialization.