In JavaScript, a `for` loop is a control flow statement that allows you to execute a block of code repeatedly. It consists of three optional parts: initialization, condition, and iteration expression, enclosed in parentheses and separated by semicolons. Here's the basic syntax:

```javascript
for (initialization; condition; iteration) {
    // code block to be executed
}
```

- The `initialization` part is where you typically initialize a counter variable. It is executed before the loop starts.
- The `condition` part is evaluated before each iteration. If it evaluates to `true`, the loop continues; otherwise, the loop stops.
- The `iteration` part is executed at the end of each iteration of the loop.

Here's a simple example of a `for` loop that iterates from 0 to 4:

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

This loop will output:

```
0
1
2
3
4
```

In this example:
- `let i = 0` initializes the loop counter `i` to 0.
- `i < 5` is the condition that checks if `i` is less than 5.
- `i++` increments the value of `i` by 1 after each iteration.

You can use `break` and `continue` statements within a `for` loop to control the flow of execution. `break` terminates the loop, while `continue` skips the current iteration and moves to the next one.

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // skip iteration if i is 2
    }
    if (i === 4) {
        break; // exit loop if i is 4
    }
    console.log(i);
}
```

This loop will output:

```
0
1
3
```

It skips printing `2` because of the `continue` statement, and it exits the loop when `i` becomes `4` because of the `break` statement.