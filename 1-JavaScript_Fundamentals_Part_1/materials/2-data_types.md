In JavaScript, there are several data types that are used to store different kinds of values. Here's a list of the basic data types in JavaScript:

1. **Primitive Data Types**:
    - **Number**: Represents numeric values, both integers and floating-point numbers.
    - **String**: Represents sequences of characters, enclosed within single ('') or double ("") quotes.
    - **Boolean**: Represents a logical value, either `true` or `false`.
    - **Undefined**: Represents a variable that has been declared but hasn't been assigned a value.
    - **Null**: Represents the intentional absence of any object value.
    - **Symbol**: Represents a unique identifier, introduced in ECMAScript 6 (ES6).

2. **Complex Data Types**:
    - **Object**: Represents a collection of key-value pairs, where values can be of any data type, including other objects.
    - **Array**: Represents an ordered list of values. Arrays can contain values of any data type, including other arrays and objects.
    - **Function**: Represents a reusable block of code that can be invoked by name.

3. **Special Data Types**:
    - **BigInt**: Represents whole numbers larger than 2^53 - 1 or smaller than -(2^53 - 1), introduced in ECMAScript 2020.

Here's a brief example demonstrating the use of these data types in JavaScript:

```javascript
// Primitive Data Types
let num = 10; // Number
let str = "Hello"; // String
let bool = true; // Boolean
let undef; // Undefined
let n = null; // Null
let sym = Symbol("symbol"); // Symbol

// Complex Data Types
let obj = { key: "value" }; // Object
let arr = [1, 2, 3]; // Array
let func = function() { console.log("Function"); }; // Function

// Special Data Type
let bigInt = 9007199254740991n; // BigInt
```

These data types are fundamental in JavaScript and are used extensively in writing scripts and applications for web development and beyond.