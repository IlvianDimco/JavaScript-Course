// 25. Write a function to find the factorial of a number.
const factorial = (num) => {
    if (num < 1) {
        return ("Negative numbers have no factorials")
    }
    result = num
    for (let i = num - 1; i > 0; i--) {
        result *= i
    }
    return (result)
}
console.log(factorial(5))