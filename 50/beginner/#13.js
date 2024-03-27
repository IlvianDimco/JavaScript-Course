// 13. Write a function to find the maximum of three numbers.
const maximum_of_three = (a, b, c) => {
    if (a >= b && a >= c) {
        return (a)
    } else if (b >= a && b >= c) {
        return (b)
    } else {
        return (c)
    }
    // return Math.max(a, b, c)
}
console.log(maximum_of_three(1, 5, 2))
console.log(maximum_of_three(-2, 0, 2))
console.log(maximum_of_three(-1, -5, -2))