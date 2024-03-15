In JavaScript, `if`, `else if`, and `else` statements are used for conditional execution of code blocks based on the evaluation of a condition. Here's how they work:

1. **if Statement**:
   The `if` statement is used to execute a block of code if a specified condition evaluates to `true`.

   Syntax:
   ```javascript
   if (condition) {
       // Code to be executed if condition is true
   }
   ```

2. **if...else Statement**:
   The `if...else` statement is used to execute one block of code if the condition is `true`, and another block of code if the condition is `false`.

   Syntax:
   ```javascript
   if (condition) {
       // Code to be executed if condition is true
   } else {
       // Code to be executed if condition is false
   }
   ```

3. **else if Statement**:
   The `else if` statement allows you to add multiple conditions to your `if` statement. It's used when you have more than two possible outcomes.

   Syntax:
   ```javascript
   if (condition1) {
       // Code to be executed if condition1 is true
   } else if (condition2) {
       // Code to be executed if condition2 is true
   } else {
       // Code to be executed if neither condition1 nor condition2 is true
   }
   ```

Example:
```javascript
let hour = new Date().getHours();

if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
```

In this example:
- If the current hour is less than 12, it prints "Good morning!".
- If the current hour is between 12 and 18 (exclusive), it prints "Good afternoon!".
- If the current hour is greater than or equal to 18, it prints "Good evening!".

You can use nested `if...else` statements if you need more complex conditions. These statements are fundamental for controlling the flow of execution in JavaScript programs based on different conditions.