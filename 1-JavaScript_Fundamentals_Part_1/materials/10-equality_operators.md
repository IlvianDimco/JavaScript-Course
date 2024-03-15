In JavaScript, there are several equality operators used to compare values. These operators evaluate whether two values are equal and return a boolean result (`true` or `false`). There are two categories of equality operators: strict equality and abstract equality.

1. **Strict Equality Operator (`===`)**:
   The strict equality operator checks whether two values are equal in both value and type. It returns `true` if both values are the same data type and have the same value, and `false` otherwise.

   Syntax:
   ```javascript
   value1 === value2
   ```

   Example:
   ```javascript
   console.log(5 === 5); // true
   console.log("5" === 5); // false (different data types)
   console.log(5 === '5'); // false (different data types)
   ```

2. **Strict Inequality Operator (`!==`)**:
   The strict inequality operator checks whether two values are not equal in both value and type. It returns `true` if the values are different in either data type or value, and `false` if they are the same in both.

   Syntax:
   ```javascript
   value1 !== value2
   ```

   Example:
   ```javascript
   console.log(5 !== 5); // false
   console.log("5" !== 5); // true (different data types)
   console.log(5 !== '5'); // true (different data types)
   ```

3. **Abstract Equality Operator (`==`)**:
   The abstract equality operator checks whether two values are equal after performing type conversion. It returns `true` if the values are equal after conversion, and `false` otherwise. This can sometimes lead to unexpected results, so it's generally recommended to use strict equality (`===`) instead.

   Syntax:
   ```javascript
   value1 == value2
   ```

   Example:
   ```javascript
   console.log(5 == 5); // true
   console.log("5" == 5); // true (converted string to number)
   console.log(5 == '5'); // true (converted number to string)
   ```

4. **Abstract Inequality Operator (`!=`)**:
   The abstract inequality operator checks whether two values are not equal after performing type conversion. It returns `true` if the values are not equal after conversion, and `false` if they are equal.

   Syntax:
   ```javascript
   value1 != value2
   ```

   Example:
   ```javascript
   console.log(5 != 5); // false
   console.log("5" != 5); // false (converted string to number, values are equal)
   console.log(5 != '5'); // false (converted number to string, values are equal)
   ```

It's generally recommended to use strict equality (`===`) and strict inequality (`!==`) operators to avoid unexpected behavior due to type coercion.