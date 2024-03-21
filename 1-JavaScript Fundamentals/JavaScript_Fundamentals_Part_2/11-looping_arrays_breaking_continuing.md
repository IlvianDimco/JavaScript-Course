In JavaScript, you can loop through arrays using a `for` loop or various other looping constructs. Here's how you can loop through an array using a `for` loop and use `break` and `continue` statements:

```javascript
const array = [1, 2, 3, 4, 5];

// Loop through the array
for (let i = 0; i < array.length; i++) {
    // Use array[i] to access each element of the array
    if (array[i] === 3) {
        // If the element is 3, skip to the next iteration
        continue;
    }

    if (array[i] === 5) {
        // If the element is 5, exit the loop
        break;
    }

    // Print the current element
    console.log(array[i]);
}
```

In this example:
- `continue` is used to skip the current iteration if the element is equal to `3`.
- `break` is used to exit the loop if the element is equal to `5`.
- `console.log(array[i])` prints the current element of the array during each iteration.

The output of this code will be:

```
1
2
4
```

It skips printing `3` because of the `continue` statement, and it exits the loop when it encounters `5` because of the `break` statement.