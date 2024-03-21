In JavaScript, you can loop backward through an array by starting the loop with the highest index and decrementing it until you reach the first index. Here's how you can loop backward through an array using a `for` loop:

```javascript
const array = [1, 2, 3, 4, 5];

// Loop backward through the array
for (let i = array.length - 1; i >= 0; i--) {
    // Print the current element
    console.log(array[i]);
}
```

In this loop:
- `i` starts at `array.length - 1`, which is the index of the last element in the array.
- The loop continues as long as `i` is greater than or equal to `0`.
- `i--` decrements `i` after each iteration, moving backward through the array.

This loop will print the elements of the array in reverse order:

```
5
4
3
2
1
```

As for loops within loops (nested loops) in JavaScript, you can achieve this by placing one loop inside the body of another loop. Here's an example of a nested loop:

```javascript
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
```

In this example, there are two loops:
- The outer loop runs three times, with `i` taking the values `0`, `1`, and `2`.
- For each iteration of the outer loop, the inner loop runs twice, with `j` taking the values `0` and `1`.
- Inside the inner loop, we log the values of `i` and `j`.

The output of this nested loop will be:

```
i: 0, j: 0
i: 0, j: 1
i: 1, j: 0
i: 1, j: 1
i: 2, j: 0
i: 2, j: 1
```

Nested loops are commonly used when you need to perform some operation on each combination of elements from two arrays, or to traverse multi-dimensional arrays.