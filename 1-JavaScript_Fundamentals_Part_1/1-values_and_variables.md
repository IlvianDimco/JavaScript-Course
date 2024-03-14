In JavaScript, values and variables are fundamental concepts that form the basis of programming. Let's break down each of them:

### Values:
Values are the fundamental pieces of data that a program manipulates. These can be various types:

1. **Primitive Values**: These are basic building blocks of data. They include:
   - Numbers: Integers or floating-point numbers (e.g., `42`, `3.14`).
   - Strings: Textual data enclosed in single (`'`) or double (`"`) quotes (e.g., `'hello'`, `"world"`).
   - Booleans: Logical values representing `true` or `false`.
   - Null: Represents the intentional absence of any value.
   - Undefined: Represents the uninitialized state of a variable or an absent property of an object.
   - Symbols: Unique and immutable data type introduced in ECMAScript 6.
   
2. **Composite Values**: These are composed of other values. They include:
   - Arrays: Ordered collections of values, accessed by numerical indices (e.g., `[1, 2, 3]`).
   - Objects: Unordered collections of key-value pairs (e.g., `{ name: 'Alice', age: 30 }`).
   - Functions: Blocks of reusable code.

### Variables:
Variables are containers for storing values. They provide a way to label and reference values in memory. In JavaScript, you declare variables using the `var`, `let`, or `const` keywords:

- `var`: Introduced in ECMAScript 1, it declares a variable with function scope or global scope.
- `let`: Introduced in ECMAScript 6, it declares a block-scoped variable that can be reassigned.
- `const`: Also introduced in ECMAScript 6, it declares a block-scoped variable that cannot be reassigned. However, it doesn't make objects immutable; it just prevents the variable from being reassigned.

Example of declaring variables:

```javascript
var age = 25; // Declaring a variable 'age' with the value 25 using var.
let name = 'John'; // Declaring a variable 'name' with the value 'John' using let.
const PI = 3.14; // Declaring a constant 'PI' with the value 3.14 using const.
```

### Variable Naming Rules:
- Variable names can contain letters, digits, underscores, and dollar signs.
- Variable names cannot begin with a digit.
- Variable names are case-sensitive.
- There are reserved words (keywords) that you cannot use as variable names, such as `let`, `const`, `var`, `function`, etc.

Understanding values and variables is crucial for writing JavaScript code as they form the backbone of any program.