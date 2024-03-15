Boolean logic in JavaScript involves using logical operators to perform logical operations on boolean values. These logical operators allow you to combine or manipulate boolean values to make decisions or control the flow of your code.

JavaScript has three main logical operators: `&&` (logical AND), `||` (logical OR), and `!` (logical NOT).

1. **Logical AND (`&&`)**:
   - The logical AND operator returns `true` if both operands are `true`; otherwise, it returns `false`.
   - It evaluates from left to right and stops as soon as it finds a `false` operand because if any operand is `false`, the result is always `false`.

   Example:
   ```javascript
   console.log(true && true);   // true
   console.log(true && false);  // false
   console.log(false && true);  // false
   console.log(false && false); // false
   ```

2. **Logical OR (`||`)**:
   - The logical OR operator returns `true` if at least one of the operands is `true`; otherwise, it returns `false`.
   - It evaluates from left to right and stops as soon as it finds a `true` operand because if any operand is `true`, the result is always `true`.

   Example:
   ```javascript
   console.log(true || true);   // true
   console.log(true || false);  // true
   console.log(false || true);  // true
   console.log(false || false); // false
   ```

3. **Logical NOT (`!`)**:
   - The logical NOT operator negates the boolean value of its operand. If the operand is `true`, `!` returns `false`; if the operand is `false`, `!` returns `true`.

   Example:
   ```javascript
   console.log(!true);  // false
   console.log(!false); // true
   ```

4. **Short-Circuit Evaluation**:
   - JavaScript uses short-circuit evaluation with logical operators. This means that if the result of an expression can be determined by evaluating only part of it, the remaining parts will not be evaluated.
   - For `&&`, if the first operand is `false`, the second operand is not evaluated because the result will always be `false`.
   - For `||`, if the first operand is `true`, the second operand is not evaluated because the result will always be `true`.

   Example:
   ```javascript
   let x = 5;
   if (x > 0 && x < 10) {
       console.log("x is between 0 and 10.");
   }
   ```

Boolean logic is essential for creating conditional statements, loops, and controlling the flow of your JavaScript code based on specific conditions.