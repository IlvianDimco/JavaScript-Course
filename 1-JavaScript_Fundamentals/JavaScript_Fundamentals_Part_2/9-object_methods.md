In JavaScript, object methods are functions that are defined as properties of an object. These methods can perform actions or computations related to the object's data and behavior. Object methods allow you to encapsulate functionality within an object, making it more modular and easier to manage.

Here's how you can define and use object methods in JavaScript:

1. **Defining Object Methods**:
   You can define object methods by assigning function expressions or arrow functions to properties of an object.

   Example:
   ```javascript
   let person = {
       name: 'John',
       age: 30,
       greet: function() {
           console.log('Hello, my name is ' + this.name);
       },
       celebrateBirthday: function() {
           this.age++;
           console.log('Happy Birthday, ' + this.name + '! You are now ' + this.age + ' years old.');
       }
   };
   ```

2. **Calling Object Methods**:
   You can call object methods using dot notation (`.`) followed by the method name and parentheses `()`.

   Example:
   ```javascript
   person.greet(); // Output: 'Hello, my name is John'
   person.celebrateBirthday(); // Output: 'Happy Birthday, John! You are now 31 years old.'
   ```

3. **Accessing Object Properties within Methods**:
   Inside object methods, you can access other properties of the same object using the `this` keyword.

   Example:
   ```javascript
   let person = {
       name: 'John',
       age: 30,
       introduce: function() {
           console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
       }
   };

   person.introduce(); // Output: 'Hello, my name is John and I am 30 years old.'
   ```

4. **Arrow Function Methods** (ES6+):
   You can also define object methods using arrow function syntax, which provides a concise way to define methods.

   Example:
   ```javascript
   let person = {
       name: 'John',
       age: 30,
       greet: () => {
           console.log('Hello, my name is ' + this.name); // 'this' refers to the surrounding scope, not the object
       }
   };
   ```

   Note: Arrow function methods have different behavior with `this` compared to regular function methods. They do not have their own `this` context and instead inherit `this` from the surrounding lexical scope.

Object methods are a powerful feature of JavaScript, allowing you to organize code, encapsulate behavior, and model real-world entities effectively. Understanding how to define and use object methods is crucial for writing clean and maintainable JavaScript code.