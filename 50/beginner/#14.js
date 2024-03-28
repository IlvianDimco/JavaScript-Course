// 14. Write a function to find the minimum of three numbers.
const minimum_of_three = (a, b, c) => {
    // return (Math.min(a, b, c))
    if (a <= b && a <= c) {
        return (a)
    } else if (b <= a && b <= c) {
        return (b)
    } else {
        return (c)
    }
}
console.log(minimum_of_three(1, 4, -2))
console.log(minimum_of_three(5, 5, 7))
console.log(minimum_of_three(-1, 4, -10))