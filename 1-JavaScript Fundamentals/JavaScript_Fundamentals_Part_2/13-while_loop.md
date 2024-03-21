In JavaScript, the `while` loop is another type of loop that repeats a block of code as long as a specified condition evaluates to `true`. The syntax of a `while` loop is as follows:

```javascript
while (condition) {
    // code block to be executed
}
```

Here's a simple example of a `while` loop that counts from 1 to 5:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++; // Increment the loop counter
}
```

In this example:
- `i` is initially set to `1`.
- The loop continues as long as `i` is less than or equal to `5`.
- Inside the loop, `console.log(i)` prints the value of `i`.
- `i++` increments the value of `i` by `1` in each iteration.

The output of this loop will be:

```
1
2
3
4
5
```

It's important to ensure that the condition provided to the `while` loop will eventually evaluate to `false`, otherwise, you'll end up with an infinite loop. To avoid infinite loops, make sure the condition changes at some point during the loop execution.

You can also use the `break` and `continue` statements within a `while` loop to control the flow of execution, similar to how they are used in `for` loops.