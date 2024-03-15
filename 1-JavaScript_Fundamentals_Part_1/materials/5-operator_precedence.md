Operator precedence in JavaScript determines the order in which operators are evaluated when multiple operators are used in a single expression. Operators with higher precedence are evaluated first. If operators have the same precedence, the associativity of the operators determines the order of evaluation (left-to-right or right-to-left).

Here's a summary of operator precedence in JavaScript, from highest to lowest:

1. **Member Access**:
   - `.` : Accessing object properties
   - `[]` : Accessing object properties using brackets

2. **Invocation and Function Call**:
   - `()` : Function invocation

3. **Postfix Operators**:
   - `++` : Post-increment (e.g., `a++`)
   - `--` : Post-decrement (e.g., `b--`)

4. **Unary Operators**:
   - `+` : Unary plus
   - `-` : Unary minus
   - `!` : Logical NOT
   - `~` : Bitwise NOT
   - `typeof` : Type identification operator
   - `void` : Void operator
   - `delete` : Delete a property from an object

5. **Exponentiation**:
   - `**` : Exponentiation (right-associative)

6. **Multiplicative Operators**:
   - `*` : Multiplication
   - `/` : Division
   - `%` : Modulus

7. **Additive Operators**:
   - `+` : Addition
   - `-` : Subtraction

8. **Bitwise Shift Operators**:
   - `<<` : Left shift
   - `>>` : Right shift
   - `>>>` : Unsigned right shift

9. **Relational Operators**:
   - `<` : Less than
   - `>` : Greater than
   - `<=` : Less than or equal to
   - `>=` : Greater than or equal to
   - `instanceof` : Tests if an object is an instance of a class
   - `in` : Tests if a property is in an object

10. **Equality Operators**:
    - `==` : Equality (with type coercion)
    - `!=` : Inequality (with type coercion)
    - `===` : Strict equality (without type coercion)
    - `!==` : Strict inequality (without type coercion)

11. **Logical AND**:
    - `&&` : Logical AND

12. **Logical OR**:
    - `||` : Logical OR

13. **Conditional (Ternary) Operator**:
    - `condition ? expr1 : expr2` : Ternary operator

14. **Assignment Operators**:
    - `=` : Assignment
    - `+=`, `-=`, `*=`, `/=`, `%=` : Compound assignment operators

Operators with higher precedence are evaluated before operators with lower precedence. However, parentheses can be used to override the default precedence and explicitly specify the order of evaluation.