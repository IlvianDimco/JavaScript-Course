Basic array operations in JavaScript involve performing common tasks such as adding or removing elements, accessing elements, and iterating over arrays. Here's an overview of these operations:

1. **Adding Elements**:
   - **Push**: Adds one or more elements to the end of an array and returns the new length of the array.
     ```javascript
     let fruits = ['apple', 'banana'];
     fruits.push('orange');
     console.log(fruits); // Output: ['apple', 'banana', 'orange']
     ```

   - **Unshift**: Adds one or more elements to the beginning of an array and returns the new length of the array.
     ```javascript
     let fruits = ['apple', 'banana'];
     fruits.unshift('orange');
     console.log(fruits); // Output: ['orange', 'apple', 'banana']
     ```

2. **Removing Elements**:
   - **Pop**: Removes the last element from an array and returns that element.
     ```javascript
     let fruits = ['apple', 'banana', 'orange'];
     let removedFruit = fruits.pop();
     console.log(removedFruit); // Output: 'orange'
     console.log(fruits); // Output: ['apple', 'banana']
     ```

   - **Shift**: Removes the first element from an array and returns that element.
     ```javascript
     let fruits = ['apple', 'banana', 'orange'];
     let removedFruit = fruits.shift();
     console.log(removedFruit); // Output: 'apple'
     console.log(fruits); // Output: ['banana', 'orange']
     ```

3. **Accessing Elements**:
   - You can access individual elements in an array using square bracket notation `[]` and the index of the element.
     ```javascript
     let fruits = ['apple', 'banana', 'orange'];
     console.log(fruits[1]); // Output: 'banana'
     ```

4. **Iterating Over Arrays**:
   - **For Loop**: Use a `for` loop to iterate over each element in the array.
     ```javascript
     let fruits = ['apple', 'banana', 'orange'];
     for (let i = 0; i < fruits.length; i++) {
         console.log(fruits[i]);
     }
     ```

   - **For...Of Loop**: Use a `for...of` loop to iterate over the values of the array directly.
     ```javascript
     let fruits = ['apple', 'banana', 'orange'];
     for (let fruit of fruits) {
         console.log(fruit);
     }
     ```

   - **forEach() Method**: Use the `forEach()` method to execute a provided function once for each array element.
     ```javascript
     let fruits = ['apple', 'banana', 'orange'];
     fruits.forEach(function(fruit) {
         console.log(fruit);
     });
     ```

These are some of the basic operations you can perform on arrays in JavaScript. Arrays are versatile data structures that allow you to store and manipulate collections of elements efficiently.