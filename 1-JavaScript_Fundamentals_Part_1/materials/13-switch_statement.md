The `switch` statement in JavaScript provides a way to execute different code blocks based on the value of an expression. It's often used as an alternative to multiple `if...else` statements when there are many possible execution paths based on a single value.

Here's the basic syntax of the `switch` statement:

```javascript
switch (expression) {
  case value1:
    // Code to be executed if expression === value1
    break;
  case value2:
    // Code to be executed if expression === value2
    break;
  // Add more cases as needed
  default:
    // Code to be executed if expression doesn't match any case
}
```

- The `switch` statement starts with the keyword `switch` followed by an expression (often a variable or a function call).
- Inside the `switch` statement, there are multiple `case` blocks, each representing a possible value of the expression.
- When the `switch` statement is executed, it evaluates the expression and compares it to the values specified in the `case` blocks.
- If a match is found, the code block associated with that `case` is executed. If there's no match, the code block associated with the `default` case (if provided) is executed.
- The `break` statement is used to exit the `switch` statement once a match is found. If omitted, the execution will continue to the next `case`, even if there's no match.

Here's an example of how to use the `switch` statement:

```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log("Today is " + dayName);
```

In this example, the value of `day` is `3`, so the code block associated with `case 3` is executed, and `dayName` is set to `"Wednesday"`. Finally, `"Today is Wednesday"` is logged to the console.