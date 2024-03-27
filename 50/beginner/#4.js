// 4. Write a function to divide two numbers.
const divide = (a, b) => {
    if (b === 0) {
        return ("Division by zero is not allowed")
    }
    return (a / b)
}
console.log(divide(6, 2))
console.log(divide(2, 2))
console.log(divide(6, 1))
console.log(divide(0, 2))
console.log(divide(6, -2))
console.log(divide(4, 0))
console.log(divide(-8, -2))
