In JavaScript, logical operators are used to perform logical operations on boolean values or expressions. There are three main logical operators: logical AND (`&&`), logical OR (`||`), and logical NOT (`!`). These operators are commonly used to make decisions, control the flow of code, and combine conditions.

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

These logical operators are fundamental in JavaScript for creating conditional statements, combining conditions, and controlling the flow of code based on specific conditions. They are commonly used in conjunction with `if` statements, loops, and other control structures to make decisions in JavaScript programs.